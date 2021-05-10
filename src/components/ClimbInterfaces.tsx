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
    owner_id: number;
    updatedAt: Date;
    createdAt: Date;

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

export interface ModalProps {
//   BackdropComponent?: React.ElementType<BackdropProps>;
//   BackdropProps?: Partial<BackdropProps>;
  children: React.ReactElement;
  closeAfterTransition?: boolean;
//   container?: PortalProps['container'];
  disableAutoFocus?: boolean;
  disableBackdropClick?: boolean;
  disableEnforceFocus?: boolean;
  disableEscapeKeyDown?: boolean;
//   disablePortal?: PortalProps['disablePortal'];
  disableRestoreFocus?: boolean;
  hideBackdrop?: boolean;
  keepMounted?: boolean;
//   manager?: ModalManager;
  onBackdropClick?: React.ReactEventHandler<{}>;
  onClose?: React.ReactEventHandler<{}>;
  onEscapeKeyDown?: React.ReactEventHandler<{}>;
//   onRendered?: PortalProps['onRendered'];
  open: boolean;
}