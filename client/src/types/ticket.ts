export type IssueType = "IT System" | "Management";
export type PriorityType = "High" | "Medium" | "Low";
export type StatusType = "In Progress" | "Completed" | "Unseen";

export interface ITicket {
    ticket_id: string;
    owner_id: string;
    title: string;
    description: string;
    assignee: string;
    type: IssueType;
    date_created: Date;
    priority: PriorityType;
    status: StatusType;
}

export interface BackendTicket {
    _id: string;
    ticket_id: string;
    owner_id: string;
    title: string;
    description: string;
    assignee: string;
    type: string;
    date_created: string;
    priority: string;
    status: string;
    createdAt: string;
    updatedAt: string;
} 