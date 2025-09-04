interface WikipediaSearchResult {
  title: string;
  snippet: string;
  url: string;
}

interface WikipediaCitation {
  source: string;
  title: string;
  url: string;
  snippet: string;
}

export async function searchWikipedia(query: string): Promise<WikipediaCitation[]> {
  try {
    // Step 1: Search for articles
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=5&namespace=0&format=json&origin=*`;
    const searchResponse = await fetch(searchUrl);
    
    if (!searchResponse.ok) {
      throw new Error('Wikipedia search failed');
    }
    
    const searchData = await searchResponse.json();
    const titles = searchData[1] || [];
    const descriptions = searchData[2] || [];
    const urls = searchData[3] || [];

    if (titles.length === 0) {
      return [];
    }

    // Step 2: Get detailed content for top results
    const results: WikipediaCitation[] = [];
    
    for (let i = 0; i < Math.min(3, titles.length); i++) {
      const title = titles[i];
      const description = descriptions[i];
      const url = urls[i];
      
      try {
        // Get page extract for more detailed snippet
        const extractUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(title)}&prop=extracts&exintro&explaintext&exsectionformat=plain&origin=*`;
        const extractResponse = await fetch(extractUrl);
        
        if (extractResponse.ok) {
          const extractData = await extractResponse.json();
          const pages = extractData.query?.pages || {};
          const pageId = Object.keys(pages)[0];
          const extract = pages[pageId]?.extract || description;
          
          results.push({
            source: 'Wikipedia',
            title: title,
            url: url,
            snippet: extract.substring(0, 300) + (extract.length > 300 ? '...' : '')
          });
        } else {
          // Fallback to description
          results.push({
            source: 'Wikipedia',
            title: title,
            url: url,
            snippet: description
          });
        }
      } catch (error) {
        console.warn('Failed to get extract for:', title);
        // Use basic info as fallback
        results.push({
          source: 'Wikipedia',
          title: title,
          url: url,
          snippet: description
        });
      }
    }

    return results;
  } catch (error) {
    console.error('Wikipedia search error:', error);
    return [];
  }
}

export function generateAnswer(citations: WikipediaCitation[], query: string): string {
  if (citations.length === 0) {
    return "I couldn't find relevant information about your question. Please try rephrasing your query or being more specific.";
  }

  // Extract key information from citations and create a comprehensive answer
  const mainCitation = citations[0];
  const additionalInfo = citations.slice(1);

  let answer = mainCitation.snippet;

  // Add information from additional sources if available
  if (additionalInfo.length > 0) {
    const additionalContext = additionalInfo
      .map(citation => citation.snippet.substring(0, 150))
      .join(' ');
    
    answer += ` Additional context: ${additionalContext}`;
  }

  // Ensure the answer is comprehensive but concise
  if (answer.length > 800) {
    answer = answer.substring(0, 800) + '...';
  }

  return answer;
}