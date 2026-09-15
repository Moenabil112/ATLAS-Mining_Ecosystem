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
  MapPinned,
} from "lucide-react";

export interface NavItem {
  to: string;
  /** i18n key suffix used as nav.<key> and nav.mobile.<key>. */
  key: string;
  icon: typeof LayoutGrid;
  /** Optional local labels for sections introduced outside the legacy locale bundles. */
  label?: {
    en: string;
    ar: string;
    fr: string;
    mobile?: {
      en: string;
      ar: string;
      fr: string;
    };
  };
}

export const navItems: NavItem[] = [
  { to: "/", key: "gateway", icon: LayoutGrid },
  {
    to: "/saudi-arabia",
    key: "saudi",
    icon: MapPinned,
    label: {
      en: "Saudi Arabia",
      ar: "السعودية",
      fr: "Arabie saoudite",
      mobile: { en: "Saudi", ar: "السعودية", fr: "Saudi" },
    },
  },
  { to: "/license", key: "license", icon: ScrollText },
  { to: "/evidence", key: "evidence", icon: FlaskConical },
  { to: "/orientation-study", key: "study", icon: FileBarChart },
  { to: "/intelligent-system", key: "system", icon: BrainCircuit },
  { to: "/roadmap-180", key: "days180", icon: CalendarRange },
  { to: "/operating-entry", key: "entry", icon: Handshake },
  { to: "/data-room", key: "data", icon: FolderLock },
  { to: "/decision-room", key: "decision", icon: Gavel },
];
