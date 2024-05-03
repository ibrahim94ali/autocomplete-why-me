export interface WhyMeResponse {
  adjectives: string[];
}

const baseUrl = "https://www.ibrahimaliu.com/why-hire-me.json";

export async function fetchWhyMe(): Promise<WhyMeResponse> {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error("An error occured. Please try again later...");
  }
  return response.json();
}
