import {
  LayoutGrid,
  ScrollText,
  FlaskConical,
  FileBarChart,
  BrainCircuit,
  CalendarRange,
  Handshake,
  FolderLock,
  Gavel,
} from "lucide-react";

export interface NavItem {
  to: string;
  label: string;
  mobileLabel: string;
  icon: typeof LayoutGrid;
}

export const navItems: NavItem[] = [
  { to: "/", label: "Gateway", mobileLabel: "Gateway", icon: LayoutGrid },
  { to: "/license", label: "License Position", mobileLabel: "License", icon: ScrollText },
  { to: "/evidence", label: "Evidence", mobileLabel: "Evidence", icon: FlaskConical },
  { to: "/orientation-study", label: "Orientation Study", mobileLabel: "Study", icon: FileBarChart },
  { to: "/intelligent-system", label: "Intelligent System", mobileLabel: "System", icon: BrainCircuit },
  { to: "/roadmap-180", label: "180-Day Upgrade", mobileLabel: "180 Days", icon: CalendarRange },
  { to: "/operating-entry", label: "Operating Entry", mobileLabel: "Entry", icon: Handshake },
  { to: "/data-room", label: "Data Room", mobileLabel: "Data", icon: FolderLock },
  { to: "/decision-room", label: "Decision Room", mobileLabel: "Decision", icon: Gavel },
];
