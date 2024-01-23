import React from "react";

export interface forAlert {
  id: string;
  type: string;
  children: string;
  isActive: boolean;
  onDismiss?: () => void;
}