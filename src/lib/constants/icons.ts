import { Zap, Battery, Bluetooth, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  Battery,
  Bluetooth,
  Smartphone
};

export const ICON_OPTIONS = [
  { value: 'Zap', label: 'Energía' },
  { value: 'Battery', label: 'Batería' },
  { value: 'Bluetooth', label: 'Bluetooth' },
  { value: 'Smartphone', label: 'App' }
];