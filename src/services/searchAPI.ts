// Search API service for multiple sources
export interface SearchResult {
  title: string;
  snippet: string;
  url?: string;
  source: string;
  type: 'wikipedia' | 'duckduckgo' | 'knowledge-base';
}

// Wikipedia API search
export async function searchWikipedia(query: string): Promise<SearchResult[]> {
  try {
    const searchUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    const response = await fetch(searchUrl, {
      headers: {
        'Api-User-Agent': 'LearnSyncQuest/1.0 (educational@learnsyncquest.com)'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      return [{
        title: data.title,
        snippet: data.extract || "No extract available",
        url: data.content_urls?.desktop?.page,
        source: 'Wikipedia',
        type: 'wikipedia'
      }];
    }
    
    // Fallback to search API if direct page not found
    const fallbackUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=3&namespace=0&format=json&origin=*`;
    const fallbackResponse = await fetch(fallbackUrl);
    const fallbackData = await fallbackResponse.json();
    
    const results: SearchResult[] = [];
    if (fallbackData[1] && fallbackData[2] && fallbackData[3]) {
      for (let i = 0; i < Math.min(3, fallbackData[1].length); i++) {
        results.push({
          title: fallbackData[1][i],
          snippet: fallbackData[2][i] || "No description available",
          url: fallbackData[3][i],
          source: 'Wikipedia',
          type: 'wikipedia'
        });
      }
    }
    
    return results;
  } catch (error) {
    console.error('Wikipedia search error:', error);
    return [];
  }
}

// DuckDuckGo Instant Answer API
export async function searchDuckDuckGo(query: string): Promise<SearchResult[]> {
  try {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
    const response = await fetch(url);
    const data = await response.json();
    
    const results: SearchResult[] = [];
    
    // Abstract (main answer)
    if (data.Abstract) {
      results.push({
        title: data.Heading || query,
        snippet: data.Abstract,
        url: data.AbstractURL,
        source: 'DuckDuckGo',
        type: 'duckduckgo'
      });
    }
    
    // Instant Answer
    if (data.Answer) {
      results.push({
        title: "Instant Answer",
        snippet: data.Answer,
        source: 'DuckDuckGo',
        type: 'duckduckgo'
      });
    }
    
    // Related topics
    if (data.RelatedTopics && data.RelatedTopics.length > 0) {
      data.RelatedTopics.slice(0, 2).forEach((topic: any) => {
        if (topic.Text) {
          results.push({
            title: topic.Text.split(' - ')[0],
            snippet: topic.Text,
            url: topic.FirstURL,
            source: 'DuckDuckGo',
            type: 'duckduckgo'
          });
        }
      });
    }
    
    return results;
  } catch (error) {
    console.error('DuckDuckGo search error:', error);
    return [];
  }
}

// Knowledge base search (our internal data)
export async function searchKnowledgeBase(query: string): Promise<SearchResult[]> {
  // This would search through our GATE, IT roles, and aptitude data
  const results: SearchResult[] = [];
  
  // Simple keyword matching for demo - in production, you'd use a proper search algorithm
  const lowerQuery = query.toLowerCase();
  
  // Search GATE topics
  if (lowerQuery.includes('gate') || lowerQuery.includes('computer science') || lowerQuery.includes('algorithm')) {
    results.push({
      title: "GATE Computer Science Preparation",
      snippet: "Comprehensive preparation material for GATE Computer Science including algorithms, data structures, operating systems, and more.",
      url: "/syllabus/gate",
      source: 'Knowledge Base',
      type: 'knowledge-base'
    });
  }
  
  // Search IT roles
  if (lowerQuery.includes('developer') || lowerQuery.includes('programming') || lowerQuery.includes('software')) {
    results.push({
      title: "Software Developer Learning Path",
      snippet: "Complete roadmap from beginner to advanced software developer including programming languages, frameworks, and best practices.",
      url: "/syllabus/it-roles",
      source: 'Knowledge Base',
      type: 'knowledge-base'
    });
  }
  
  // Search SAP
  if (lowerQuery.includes('sap') || lowerQuery.includes('erp')) {
    results.push({
      title: "SAP Learning Modules",
      snippet: "Comprehensive SAP training covering PP, MM, FI, SD, and other essential modules for enterprise resource planning.",
      url: "/syllabus/it-roles",
      source: 'Knowledge Base',
      type: 'knowledge-base'
    });
  }
  
  return results;
}

// Main search function that combines all sources
export async function performSearch(query: string, source: string = 'all'): Promise<SearchResult[]> {
  const allResults: SearchResult[] = [];
  
  try {
    if (source === 'all' || source === 'wikipedia') {
      const wikipediaResults = await searchWikipedia(query);
      allResults.push(...wikipediaResults);
    }
    
    if (source === 'all' || source === 'duckduckgo') {
      const duckduckgoResults = await searchDuckDuckGo(query);
      allResults.push(...duckduckgoResults);
    }
    
    if (source === 'all' || source === 'knowledge-base') {
      const knowledgeResults = await searchKnowledgeBase(query);
      allResults.push(...knowledgeResults);
    }
    
    // Remove duplicates and limit results
    const uniqueResults = allResults.filter((result, index, self) => 
      index === self.findIndex(r => r.title === result.title && r.snippet === result.snippet)
    );
    
    return uniqueResults.slice(0, 6); // Limit to 6 results
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}