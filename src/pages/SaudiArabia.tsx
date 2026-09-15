import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Building2,
  Compass,
  Globe2,
  MapPinned,
  Network,
  Pickaxe,
  ShieldCheck,
  Ship,
} from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";

const copy = {
  en: {
    eyebrow: "KINGDOM OF SAUDI ARABIA",
    title: "Atlas Golden Mining — Saudi Arabia",
    subtitle:
      "Atlas Golden Mining’s Saudi operating window for field programmes, mineral project development, technical validation and cross-border mineral supply-chain coordination.",
    position:
      "The Saudi operation is designed as the Kingdom-facing arm of the wider Atlas mining ecosystem: connecting field execution, mineral intelligence, project origination and international mineral corridors with Saudi industrial demand.",
    badge1: "Saudi operating presence",
    badge2: "Field-led mining development",
    badge3: "Regional mineral bridge",
    mandateTitle: "Saudi mandate",
    mandateText:
      "Build a locally anchored mining and mineral-development capability that can originate, validate and advance opportunities in the Kingdom while connecting selected international mineral assets to Saudi processing, industry and investment channels.",
    capabilitiesTitle: "Core activities in Saudi Arabia",
    capabilities: [
      {
        title: "Reconnaissance & Field Programmes",
        text: "Field reconnaissance, sampling programmes, geological observations, target validation and structured field evidence for early-stage mineral opportunities.",
      },
      {
        title: "Mining Project Development",
        text: "Project origination, technical-commercial structuring, local operating preparation and development pathways for mining and mineral-processing opportunities.",
      },
      {
        title: "Mineral Intelligence & Validation",
        text: "Integration of field evidence with digital mineral-intelligence workflows, including controlled field validation in collaboration with deep-tech partners.",
      },
      {
        title: "Mineral Supply-Chain Coordination",
        text: "Commercial coordination for lawful mineral flows, qualified counterparties, Saudi industrial interfaces and selected import, processing and offtake pathways.",
      },
    ],
    footprintTitle: "Operating footprint",
    footprint1Title: "Saudi Field Programmes",
    footprint1Text:
      "Field-led reconnaissance and validation programmes, including Atlas-controlled field workstreams such as Al Asyah FIELD-02 at reconnaissance stage.",
    footprint2Title: "Saudi–Morocco Mining Bridge",
    footprint2Text:
      "A commercial and development bridge linking Atlas mineral assets and know-how in Morocco with Saudi investors, industrial users and mineral value-chain opportunities.",
    footprint3Title: "Regional Mineral Corridors",
    footprint3Text:
      "Structured participation in compliant mineral corridors connecting African production opportunities with Saudi refining, processing, trading and industrial demand.",
    modelTitle: "How Atlas operates",
    modelSteps: [
      "Identify & qualify opportunity",
      "Field reconnaissance & evidence",
      "Technical / commercial validation",
      "Saudi project structuring",
      "Operating, processing or supply-chain pathway",
    ],
    techTitle: "Field + technology",
    techText:
      "Atlas combines field execution with specialist technology partners. In Saudi Arabia, this includes acting as a controlled field-validation partner for mineral-intelligence systems such as QASSAS, while Atlas remains responsible for physical field execution and operational evidence.",
    roleTitle: "Strategic role inside the Atlas ecosystem",
    roleText:
      "Saudi Arabia is not treated as a sales outpost. It is a core operating and development jurisdiction for Atlas — a place to build local mining capability, validate mineral opportunities, develop Saudi-led projects and connect regional resources to the Kingdom’s industrial mineral value chains.",
    footer: "ATLAS GOLDEN MINING — SAUDI ARABIA · Field execution · Mineral development · Industrial bridge",
  },
  ar: {
    eyebrow: "المملكة العربية السعودية",
    title: "أطلس الذهبية للتعدين — المملكة العربية السعودية",
    subtitle:
      "الواجهة التشغيلية لأطلس الذهبية في المملكة لبرامج العمل الميداني، وتطوير المشاريع المعدنية، والتحقق الفني، وربط سلاسل الإمداد المعدنية الإقليمية بالطلب الصناعي السعودي.",
    position:
      "تمثل عمليات أطلس في السعودية الذراع الموجهة للمملكة ضمن منظومة أطلس الأوسع، حيث تجمع بين التنفيذ الميداني، والذكاء المعدني، وتطوير الفرص، وربط الممرات المعدنية الدولية بالتصنيع والاستثمار داخل المملكة.",
    badge1: "حضور تشغيلي سعودي",
    badge2: "تطوير تعديني قائم على الميدان",
    badge3: "جسر معدني إقليمي",
    mandateTitle: "المهمة في السعودية",
    mandateText:
      "بناء قدرة تعدين وتطوير معدني ذات ارتكاز محلي تستطيع توليد الفرص والتحقق منها وتطويرها داخل المملكة، مع ربط أصول معدنية دولية مختارة بقنوات التصنيع والاستثمار وسلاسل القيمة السعودية.",
    capabilitiesTitle: "الأنشطة الأساسية في المملكة",
    capabilities: [
      {
        title: "الاستطلاع والبرامج الميدانية",
        text: "تنفيذ أعمال الاستطلاع وجمع العينات والملاحظات الجيولوجية والتحقق من الأهداف وبناء أدلة ميدانية منظمة للفرص المعدنية في مراحلها المبكرة.",
      },
      {
        title: "تطوير المشاريع التعدينية",
        text: "توليد المشاريع وهيكلتها فنياً وتجارياً، وتجهيز مسارات التشغيل المحلي والتطوير للفرص التعدينية ومشاريع معالجة المعادن.",
      },
      {
        title: "الذكاء المعدني والتحقق",
        text: "دمج الأدلة الميدانية مع أنظمة الذكاء المعدني الرقمية، بما يشمل التحقق الميداني المنضبط بالتعاون مع شركاء التكنولوجيا العميقة.",
      },
      {
        title: "تنسيق سلاسل الإمداد المعدنية",
        text: "تنسيق تجاري لتدفقات المعادن النظامية، والأطراف المؤهلة، والواجهات الصناعية السعودية، ومسارات الاستيراد والمعالجة والتصريف المختارة.",
      },
    ],
    footprintTitle: "نطاق العمل",
    footprint1Title: "البرامج الميدانية السعودية",
    footprint1Text:
      "برامج استطلاع وتحقق ميداني تقودها أطلس، بما في ذلك مسارات عمل خاضعة لإدارتها مثل برنامج الأسياح FIELD-02 في مرحلة الاستطلاع.",
    footprint2Title: "الجسر التعديني السعودي–المغربي",
    footprint2Text:
      "مسار تجاري وتطويري يربط أصول أطلس وخبراتها في المغرب بالمستثمرين والمستخدمين الصناعيين وفرص سلاسل القيمة المعدنية في المملكة.",
    footprint3Title: "الممرات المعدنية الإقليمية",
    footprint3Text:
      "مشاركة منظمة في ممرات معدنية متوافقة تربط فرص الإنتاج الأفريقي بالتكرير والمعالجة والتجارة والطلب الصناعي داخل السعودية.",
    modelTitle: "آلية عمل أطلس",
    modelSteps: [
      "تحديد الفرصة وتأهيلها",
      "الاستطلاع وبناء الدليل الميداني",
      "التحقق الفني والتجاري",
      "هيكلة المشروع داخل السعودية",
      "مسار التشغيل أو المعالجة أو سلسلة الإمداد",
    ],
    techTitle: "الميدان + التكنولوجيا",
    techText:
      "تجمع أطلس بين التنفيذ الميداني وشركاء التكنولوجيا المتخصصين. وفي السعودية يشمل ذلك دور الشريك الميداني المنضبط للتحقق من أنظمة الذكاء المعدني مثل QASSAS، مع بقاء التنفيذ الفيزيائي وبناء الدليل التشغيلي ضمن مسؤولية أطلس.",
    roleTitle: "الدور الاستراتيجي داخل منظومة أطلس",
    roleText:
      "لا تُعامل السعودية كواجهة مبيعات، بل كاختصاص تشغيلي وتطويري أساسي لأطلس: لبناء قدرة تعدين محلية، والتحقق من الفرص المعدنية، وتطوير مشاريع بقيادة سعودية، وربط الموارد الإقليمية بسلاسل القيمة الصناعية للمملكة.",
    footer: "أطلس الذهبية للتعدين — السعودية · تنفيذ ميداني · تطوير معدني · جسر صناعي",
  },
  fr: {
    eyebrow: "ROYAUME D’ARABIE SAOUDITE",
    title: "Atlas Golden Mining — Arabie saoudite",
    subtitle:
      "La fenêtre opérationnelle saoudienne d’Atlas Golden Mining pour les programmes de terrain, le développement de projets miniers, la validation technique et la coordination des chaînes d’approvisionnement minérales.",
    position:
      "L’activité saoudienne constitue le bras opérationnel du groupe Atlas tourné vers le Royaume, reliant l’exécution de terrain, l’intelligence minérale, l’origination de projets et les corridors minéraux internationaux à la demande industrielle saoudienne.",
    badge1: "Présence opérationnelle saoudienne",
    badge2: "Développement minier de terrain",
    badge3: "Pont minéral régional",
    mandateTitle: "Mandat en Arabie saoudite",
    mandateText:
      "Construire une capacité locale de développement minier capable d’identifier, valider et faire progresser des opportunités dans le Royaume, tout en reliant certains actifs minéraux internationaux aux chaînes saoudiennes de transformation, d’industrie et d’investissement.",
    capabilitiesTitle: "Activités principales",
    capabilities: [
      {
        title: "Reconnaissance & programmes terrain",
        text: "Reconnaissance, échantillonnage, observations géologiques, validation de cibles et constitution structurée de preuves de terrain.",
      },
      {
        title: "Développement de projets miniers",
        text: "Origination, structuration technico-commerciale, préparation opérationnelle locale et parcours de développement de projets miniers et de traitement.",
      },
      {
        title: "Intelligence minérale & validation",
        text: "Intégration des données de terrain aux workflows numériques d’intelligence minérale et validation contrôlée avec des partenaires deep-tech.",
      },
      {
        title: "Coordination des chaînes minérales",
        text: "Coordination commerciale de flux minéraux conformes, de contreparties qualifiées et d’interfaces industrielles saoudiennes.",
      },
    ],
    footprintTitle: "Empreinte opérationnelle",
    footprint1Title: "Programmes terrain saoudiens",
    footprint1Text:
      "Programmes de reconnaissance et de validation, incluant des workstreams contrôlés par Atlas tels qu’Al Asyah FIELD-02 au stade de reconnaissance.",
    footprint2Title: "Pont minier Arabie saoudite–Maroc",
    footprint2Text:
      "Un lien commercial et de développement entre les actifs et le savoir-faire d’Atlas au Maroc et les investisseurs, industriels et chaînes de valeur saoudiens.",
    footprint3Title: "Corridors minéraux régionaux",
    footprint3Text:
      "Participation structurée à des corridors conformes reliant des opportunités de production africaines au raffinage, au traitement, au négoce et à la demande industrielle saoudiens.",
    modelTitle: "Mode opératoire Atlas",
    modelSteps: [
      "Identifier et qualifier",
      "Reconnaissance et preuves terrain",
      "Validation technique / commerciale",
      "Structuration du projet en Arabie saoudite",
      "Voie opérationnelle, traitement ou chaîne d’approvisionnement",
    ],
    techTitle: "Terrain + technologie",
    techText:
      "Atlas associe l’exécution physique à des partenaires technologiques spécialisés. En Arabie saoudite, Atlas agit notamment comme partenaire contrôlé de validation terrain pour des systèmes d’intelligence minérale tels que QASSAS.",
    roleTitle: "Rôle stratégique dans l’écosystème Atlas",
    roleText:
      "L’Arabie saoudite n’est pas un simple relais commercial. Elle constitue une juridiction opérationnelle et de développement centrale pour Atlas, dédiée aux capacités minières locales, à la validation d’opportunités et à l’intégration des ressources régionales dans les chaînes de valeur industrielles du Royaume.",
    footer: "ATLAS GOLDEN MINING — ARABIE SAOUDITE · Terrain · Développement minéral · Pont industriel",
  },
} as const;

const capabilityIcons = [Compass, Pickaxe, Network, Ship];

export function SaudiArabia() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("ar")
    ? "ar"
    : i18n.resolvedLanguage?.startsWith("fr")
      ? "fr"
      : "en";
  const c = copy[language];

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl border border-graphite-700/70 bg-graphite-900/70 px-6 py-8 sm:px-8 sm:py-10">
        <div className="absolute -end-20 -top-24 h-64 w-64 rounded-full bg-copper-600/10 blur-3xl" />
        <div className="absolute -bottom-28 -start-16 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-copper-300">
            <MapPinned className="h-4 w-4" />
            {c.eyebrow}
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-sand-50 sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-sand-100/80 sm:text-lg">
            {c.subtitle}
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-sand-200/65">
            {c.position}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="copper">{c.badge1}</Badge>
            <Badge tone="mineral">{c.badge2}</Badge>
            <Badge tone="sand">{c.badge3}</Badge>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Panel className="p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-copper-500/20 bg-copper-500/10 p-2 text-copper-300">
              <Building2 className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-sand-50">{c.mandateTitle}</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-sand-200/70">{c.mandateText}</p>
        </Panel>
        <Panel className="p-6 sm:p-7">
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sand-300/50">
                Atlas Saudi
              </div>
              <div className="mt-3 text-2xl font-semibold text-sand-50">Field → Validation → Development</div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-copper-300">
              <ShieldCheck className="h-4 w-4" />
              Saudi-led execution model
            </div>
          </div>
        </Panel>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold tracking-tight text-sand-50">{c.capabilitiesTitle}</h2>
          <div className="mt-3 h-px w-20 bg-copper-500/60" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {c.capabilities.map((item, index) => {
            const Icon = capabilityIcons[index];
            return (
              <Panel key={item.title} hover className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-graphite-600 bg-graphite-800 p-2.5 text-copper-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sand-50">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-sand-200/65">{item.text}</p>
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold tracking-tight text-sand-50">{c.footprintTitle}</h2>
          <div className="mt-3 h-px w-20 bg-copper-500/60" />
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            [MapPinned, c.footprint1Title, c.footprint1Text],
            [Globe2, c.footprint2Title, c.footprint2Text],
            [Network, c.footprint3Title, c.footprint3Text],
          ].map(([Icon, title, text], index) => {
            const IconComponent = Icon as typeof MapPinned;
            return (
              <Panel key={index} className="p-6">
                <IconComponent className="h-5 w-5 text-copper-300" />
                <h3 className="mt-4 font-semibold text-sand-50">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-sand-200/65">{text as string}</p>
              </Panel>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold tracking-tight text-sand-50">{c.modelTitle}</h2>
          <div className="mt-3 h-px w-20 bg-copper-500/60" />
        </div>
        <Panel className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            {c.modelSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className="rounded-md border border-graphite-600 bg-graphite-800 px-3 py-2 text-xs font-medium text-sand-100">
                  {step}
                </div>
                {index < c.modelSteps.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-copper-500/60 rtl:rotate-180" />
                )}
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <Panel className="p-6">
          <div className="flex items-center gap-3">
            <Network className="h-5 w-5 text-copper-300" />
            <h2 className="text-lg font-semibold text-sand-50">{c.techTitle}</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-sand-200/65">{c.techText}</p>
        </Panel>
        <Panel className="p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-copper-300" />
            <h2 className="text-lg font-semibold text-sand-50">{c.roleTitle}</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-sand-200/65">{c.roleText}</p>
        </Panel>
      </section>

      <div className="border-t border-graphite-700/70 pt-6 text-center text-[11px] uppercase tracking-[0.12em] text-sand-300/45">
        {c.footer}
      </div>
    </div>
  );
}
