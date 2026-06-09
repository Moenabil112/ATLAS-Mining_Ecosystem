import {
  LayoutDashboard,
  Target,
  EyeOff,
  FlaskConical,
  Recycle,
  ShieldCheck,
  Map,
  MapPin,
  Layers,
  ClipboardList,
  Gauge,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  LayoutDashboard,
  Target,
  EyeOff,
  FlaskConical,
  Recycle,
  ShieldCheck,
  Map,
  MapPin,
  Layers,
  ClipboardList,
  Gauge,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? HelpCircle;
  return <Cmp className={className} />;
}
