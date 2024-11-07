declare module '@/components/ui/card' {
    import React from 'react';
  
    export const Card: React.FC<{ className?: string }>;
    export const CardHeader: React.FC<{ children: React.ReactNode }>;
    export const CardTitle: React.FC<{ children: React.ReactNode }>;
    export const CardContent: React.FC<{ children: React.ReactNode }>;
  }
  