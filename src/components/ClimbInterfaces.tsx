import * as React from 'react';

export interface OutdoorClimb {
    location: string;
    routename: string;
    date: string;
    type: string;
    difficulty: string;
    pitches: number;
    grade: number;
    beta: string;
    style: string;
    duration: number;
    rating: number;
    image_id: string;
    secret: boolean;
    // updatedAt: string;
    // createdAt: string;
    id: number;
    // owner_id: number;

}

export interface GoalObject {
    id: number;
    pitchcount: string;
    tradpitches: string;
    sportpitches: string;
    tradmaxdiff: string;
    sportmaxdiff: string;
    daysclimbed: string;
    duration: string;
    secret: boolean;

}

export interface ClimbResponse {
    id: number;
    location: string;
    routename: string;
    date: string;
    type: string;
    difficulty: string;
    pitches: number;
    grade: number;
    beta: string;
    style: string;
    duration: number;
    rating: number;
    image_id?: any;
    owner_id: number;
    secret: boolean;
    updatedAt: Date;
    createdAt: Date;
}

export interface GoalResponse {
    id: number;
    pitchcount: number;
    tradpitches: number;
    sportpitches: number;
    tradmaxdiff: number;
    sportmaxdiff: number;
    daysclimbed: number;
    duration: number;
    owner_id: number;
    secret: boolean;
    updatedAt: Date;
    createdAt: Date;
}