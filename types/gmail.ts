export interface InboxEmail {
     id: string;
     subject: string;
     from: string;
     snippet: string;
}

export interface EmailDetails {
     id: string;
     subject: string;
     from: string;
     to: string;
     snippet: string;
     body: string;
}