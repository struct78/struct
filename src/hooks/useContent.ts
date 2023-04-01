export const useContent = () => {
  const parseContent = <T>(content: string): T | object | undefined => {
    try {
      return JSON.parse(content)
    } catch { }
    return {}
  }

  return {
    parseContent,
  }
}
