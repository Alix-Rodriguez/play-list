export interface Course {
    id?:            number;
    name_category?: string;
    videos?:        Video[];
}

export interface Video {
    name?:        string;
    url?:         string;
    description?: string;
}
