export interface Message {
    text: string;
    isUser: boolean;
  }
  
  export interface Plan {
    idea: string;
    techStack: Record<string, string>;
    structure: string;
    code: string;
    notes: string;
  }