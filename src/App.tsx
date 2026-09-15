import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { Gateway } from "@/pages/Gateway";
import { LicensePosition } from "@/pages/LicensePosition";
import { Evidence } from "@/pages/Evidence";
import { OrientationStudy } from "@/pages/OrientationStudy";
import { IntelligentSystem } from "@/pages/IntelligentSystem";
import { Roadmap180 } from "@/pages/Roadmap180";
import { OperatingEntry } from "@/pages/OperatingEntry";
import { DataRoom } from "@/pages/DataRoom";
import { DecisionRoom } from "@/pages/DecisionRoom";
import { SaudiArabia } from "@/pages/SaudiArabia";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <AppShell>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="/saudi-arabia" element={<SaudiArabia />} />
        <Route path="/license" element={<LicensePosition />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/orientation-study" element={<OrientationStudy />} />
        <Route path="/intelligent-system" element={<IntelligentSystem />} />
        <Route path="/roadmap-180" element={<Roadmap180 />} />
        <Route path="/operating-entry" element={<OperatingEntry />} />
        <Route path="/data-room" element={<DataRoom />} />
        <Route path="/decision-room" element={<DecisionRoom />} />
        <Route path="*" element={<Gateway />} />
      </Routes>
    </AppShell>
  );
}
