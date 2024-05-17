export interface Course {
    id?:            number;
    name_category?: string;
    videos?:        Video[];
}

export interface Video {
    video_id?:          number;  
    name?:        string;
    url?:         string;
    description?: string;
}
