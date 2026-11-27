import React from "react";
import { AbsoluteFill } from "remotion";

const INK = "#16130d";
const PAPER = "#f7f2e7";
const RED = "#a41f24";
const GOLD = "#d9a514";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Arial, Helvetica, sans-serif";

const Kicker: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = RED,
}) => (
  <div
    style={{
      color,
      fontFamily: SANS,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 2,
    }}
  >
    {children}
  </div>
);

const ScalesIcon: React.FC = () => (
  <svg width="58" height="58" viewBox="0 0 72 72">
    <rect x="33" y="8" width="6" height="34" fill={INK} />
    <circle cx="36" cy="6" r="3.5" fill={RED} />
    <rect x="10" y="14" width="52" height="4" fill={INK} />
    <line x1="16" y1="18" x2="8" y2="34" stroke={INK} strokeWidth="2.5" />
    <line x1="16" y1="18" x2="24" y2="34" stroke={INK} strokeWidth="2.5" />
    <path d="M4 34 h24 l-4 8 h-16 z" fill={GOLD} stroke={INK} strokeWidth="1.5" />
    <line x1="56" y1="18" x2="48" y2="34" stroke={INK} strokeWidth="2.5" />
    <line x1="56" y1="18" x2="64" y2="34" stroke={INK} strokeWidth="2.5" />
    <path d="M44 34 h24 l-4 8 h-16 z" fill={GOLD} stroke={INK} strokeWidth="1.5" />
    <rect x="24" y="44" width="24" height="5" fill={INK} />
    <rect x="18" y="51" width="36" height="5" fill={INK} />
  </svg>
);

const FlameIcon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 48 48">
    <path
      d="M24 3 C27 10 34 14 34 25 a10 10 0 1 1 -20 0 C14 17 20 13 24 3 z"
      fill={RED}
      stroke={INK}
      strokeWidth="1.6"
    />
    <path d="M24 22 c2 3 5 4.6 5 8 a5 5 0 1 1 -10 0 c0 -3.4 3 -5 5 -8 z" fill={GOLD} />
  </svg>
);

const ChartIcon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 48 48">
    <line x1="6" y1="42" x2="43" y2="42" stroke={INK} strokeWidth="2.4" />
    <rect x="10" y="26" width="6" height="16" fill="#3e7d3a" stroke={INK} strokeWidth="1.2" />
    <rect x="20" y="18" width="6" height="24" fill="#3e7d3a" stroke={INK} strokeWidth="1.2" />
    <rect x="30" y="30" width="6" height="12" fill={RED} stroke={INK} strokeWidth="1.2" />
    <polyline points="8,24 18,14 27,19 40,7" fill="none" stroke={GOLD} strokeWidth="2.6" />
    <circle cx="40" cy="7" r="2.6" fill={GOLD} stroke={INK} strokeWidth="1" />
  </svg>
);

const EuIcon: React.FC = () => {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    return { x: 24 + 13.5 * Math.cos(a), y: 24 + 13.5 * Math.sin(a) };
  });
  return (
    <svg width="40" height="40" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="21" fill="#1d4e89" stroke={INK} strokeWidth="1.6" />
      {stars.map((s, i) => (
        <text
          key={i}
          x={s.x}
          y={s.y + 3}
          fontSize="8.5"
          fill={GOLD}
          textAnchor="middle"
          fontFamily={SANS}
        >
          ★
        </text>
      ))}
    </svg>
  );
};

const WorldMap: React.FC = () => (
  <svg width="330" height="150" viewBox="0 0 328 172">
    <rect x="0" y="0" width="328" height="172" fill="#e9e2cf" stroke={INK} strokeWidth="1.5" />
    {[41, 82, 123].map((y) => (
      <line key={y} x1="0" y1={y} x2="328" y2={y} stroke="#d8cfb2" strokeWidth="1" />
    ))}
    {[55, 110, 164, 219, 273].map((x) => (
      <line key={x} x1={x} y1="0" x2={x} y2="172" stroke="#d8cfb2" strokeWidth="1" />
    ))}
    <g fill="#c9bd9c">
      <path d="M18 38 l38 -12 30 6 8 16 -12 14 -26 4 -24 -8 -14 -10 z" />
      <path d="M78 78 l16 4 4 22 -8 30 -12 10 -6 -22 -2 -26 z" />
      <path d="M140 30 l34 -8 44 4 26 14 6 14 -20 10 -34 -2 -30 8 -20 -8 -8 -16 z" />
      <path d="M168 66 l20 2 10 22 -4 26 -12 16 -10 -18 -6 -28 z" />
      <path d="M216 74 l34 -6 30 8 14 16 -6 14 -30 4 -28 -8 -12 -14 z" />
      <path d="M282 118 l20 -4 12 10 -4 14 -18 4 -10 -10 z" />
    </g>
    <g fontFamily={SANS} fontSize="8.5" fontWeight="bold" fill={INK}>
      <circle cx="46" cy="52" r="3.4" fill={RED} />
      <text x="52" y="49">New York</text>
      <circle cx="152" cy="40" r="3.4" fill={RED} />
      <text x="130" y="26">Brussels</text>
      <circle cx="146" cy="52" r="3.4" fill={RED} />
      <text x="118" y="66">Paris</text>
      <circle cx="128" cy="86" r="3.4" fill={RED} />
      <text x="96" y="100">Conakry</text>
      <circle cx="176" cy="98" r="3.4" fill={RED} />
      <text x="182" y="102">Lusaka</text>
      <circle cx="200" cy="58" r="3.4" fill={RED} />
      <text x="206" y="55">Halabja</text>
      <circle cx="228" cy="76" r="3.4" fill={RED} />
      <text x="234" y="73">Kathmandu</text>
      <circle cx="252" cy="52" r="3.4" fill={RED} />
      <text x="238" y="40">Pyongyang</text>
      <circle cx="264" cy="66" r="3.4" fill={RED} />
      <text x="270" y="63">Tokyo</text>
      <circle cx="248" cy="88" r="3.4" fill={RED} />
      <text x="216" y="94">Manila</text>
      <circle cx="284" cy="126" r="3.4" fill={RED} />
      <text x="252" y="140">Flinders I.</text>
      <circle cx="306" cy="140" r="4" fill={RED} stroke="#fff" strokeWidth="1.4" />
      <text x="258" y="160">Wellington</text>
    </g>
  </svg>
);

const seatSegments: { w: number; c: string }[] = [
  { w: 30.77, c: "#1d4e89" },
  { w: 10, c: "#4f86c6" },
  { w: 9.23, c: "#8aa8c8" },
  { w: 5.38, c: GOLD },
  { w: 27.69, c: RED },
  { w: 13.08, c: "#3e7d3a" },
  { w: 3.85, c: "#6b4fa1" },
];

const chips: [string, string][] = [
  ["NATIONAL", "40"],
  ["LABOUR", "36"],
  ["GREEN", "17"],
  ["ACT", "13"],
  ["NZ FIRST", "12"],
  ["OPPORTUNITY", "7"],
  ["TE PĀTI MĀORI", "5"],
  ["SPECIAL VOTES", "484,865"],
];

const moreLeft: [string, string][] = [
  ["Tokyo", "Core consumer prices rose 2.9% in November from a year earlier, the highest since July 2025."],
  ["Pyongyang", "Kim Jong Un, in a letter to community leaders, stressed loyalty to the ruling party above all."],
  ["Paris", "French industrial producer prices jumped 9.6% in October, official figures showed."],
  ["Halabja", "Iraq's Border Force sealed the Pashta crossing with Iran, on Baghdad's orders."],
  ["Conakry", "Guinea ordered a clean-up of the capital, months after the deadly rubbish-dump collapse."],
  ["Damascus", "The US congratulated Syria on Captagon seizures and the capture of Iranian arms."],
  ["Kyiv", "Zelenskyy warned Russia is preparing a major offensive within days."],
];

const moreRight: [string, string][] = [
  ["Washington", "Jared Kushner called the Ukraine war a “proxy war” and warned of escalation."],
  ["Madrid", "The Hind Rajab Foundation filed a legal action in Spain against two Israeli soldiers."],
  ["Kathmandu", "Three months after Nepal's floods, people are still stranded in disaster zones."],
  ["Lusaka", "Claims of an alleged coup attempt, and of Russian involvement, stirred Zambia's politics."],
  ["Portsmouth", "UK police responded to a possible bomb threat at the Royal Navy station."],
  ["Rome", "Meloni warned Kyiv against extending the war into the Mediterranean."],
  ["New York", "Black Friday: America's biggest shopping day dawns, stores chasing holiday spending."],
];

const timeline: [string, string][] = [
  ["00:30 UTC · TOKYO", "November core CPI prints +2.9% on the year, the fastest since July 2025."],
  ["FRIDAY · WELLINGTON", "Electoral Commission declares the official count: 65–65, a hung parliament."],
  ["ALL DAY · BRUSSELS", "Leaders haggle over the €1.78T budget; no agreement, talks continue."],
  ["14:30 UTC · NEW YORK", "Wall Street reopens after Thanksgiving for a shortened Black Friday session."],
  ["MONDAY · THE HAGUE", "Duterte enters his plea as the ICC trial gets under way."],
];

const bodyText: React.CSSProperties = {
  fontSize: 13.2,
  lineHeight: 1.34,
  textAlign: "justify",
  fontFamily: SERIF,
};

export const NewsImage27: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: PAPER, color: INK, fontFamily: SERIF, padding: "15px 27px 9px 27px" }}
    >
      <div style={{ borderTop: `5px solid ${INK}`, borderBottom: `1.5px solid ${INK}`, height: 8 }} />
      <div style={{ textAlign: "center", padding: "5px 0 3px 0" }}>
        <div style={{ fontSize: 53, fontWeight: 900, letterSpacing: 1, lineHeight: 1 }}>
          THE WORLD IN ONE DAY
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `2.5px solid ${INK}`,
          borderBottom: `2.5px solid ${INK}`,
          padding: "4px 2px",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 0.4,
          fontFamily: SERIF,
        }}
      >
        <span>FRIDAY, 27 NOVEMBER 2026</span>
        <span style={{ fontWeight: 400, fontStyle: "italic" }}>
          20 dated stories · 8 regions · every story happened, or was first reported, today
        </span>
        <span>EST. 2026</span>
      </div>

      <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
        <div style={{ width: 618 }}>
          <Kicker>WELLINGTON · POLITICS · THE FINAL COUNT</Kicker>
          <div style={{ fontSize: 30, lineHeight: 1.07, fontWeight: 900, margin: "3px 0 5px 0" }}>
            65–65: New Zealand's final count deadlocks parliament — a brand-new party holds the keys
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "stretch", margin: "2px 0 6px 0" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                border: `2px solid ${INK}`,
                backgroundColor: "#fffdf6",
                padding: "4px 14px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 44, fontWeight: 900, lineHeight: 1, color: "#1d4e89" }}>65</div>
                <div style={{ fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: 1 }}>RIGHT BLOC</div>
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, color: RED }}>–</div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 44, fontWeight: 900, lineHeight: 1, color: RED }}>65</div>
                <div style={{ fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: 1 }}>LEFT + OPP.</div>
              </div>
            </div>
            <div style={{ ...bodyText, flex: 1 }}>
              The Electoral Commission declared the official results of the 7 November election on
              Friday, and after <b style={{ color: RED }}>484,865 special votes</b> the governing
              centre-right coalition fell one seat short of the 66 needed to govern.
            </div>
          </div>
          <div style={bodyText}>
            National (40), ACT (13) and New Zealand First (12) hold <b>65 of 130 seats</b>. Labour
            won the party vote, <b>29.88% to 28.35%</b>, and 36 seats; the left bloc (Greens 17, Te
            Pāti Māori 5) holds 58 — and even with help it reaches only 65. Between the blocs sit
            the seven seats of <b style={{ color: RED }}>Opportunity</b>, a centrist party led by
            38-year-old Qiulae Wong: only her seats can push a bloc past 66, making her the
            kingmaker PM Christopher Luxon must win over.
          </div>
          <div style={{ marginTop: 8 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: SANS,
                fontSize: 10.5,
                fontWeight: 700,
              }}
            >
              <span>RIGHT BLOC — 65</span>
              <span>OPPORTUNITY — 7</span>
              <span>LEFT BLOC — 58</span>
            </div>
            <div
              style={{
                display: "flex",
                height: 19,
                border: `1.5px solid ${INK}`,
                margin: "3px 0 2px 0",
                position: "relative",
              }}
            >
              {seatSegments.map((s, i) => (
                <div key={i} style={{ width: `${s.w}%`, backgroundColor: s.c, height: "100%" }} />
              ))}
              <div
                style={{
                  position: "absolute",
                  left: "50.7%",
                  top: -4,
                  bottom: -4,
                  borderLeft: `2.5px dashed ${RED}`,
                }}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                fontFamily: SANS,
                fontSize: 10,
                color: RED,
                fontWeight: 700,
                marginBottom: 5,
              }}
            >
              ▲ 66 NEEDED TO GOVERN
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {chips.map(([name, n]) => (
              <span
                key={name}
                style={{
                  fontFamily: SANS,
                  fontSize: 11,
                  fontWeight: 700,
                  border: `1.5px solid ${INK}`,
                  padding: "2px 6px",
                  backgroundColor: "#fffdf6",
                }}
              >
                {name} <span style={{ color: RED }}>{n}</span>
              </span>
            ))}
          </div>
        </div>

        <div style={{ width: 336 }}>
          <div style={{ borderTop: `3px solid ${INK}`, paddingTop: 6 }}>
            <Kicker>THE HAGUE · JUSTICE</Kicker>
            <div style={{ fontSize: 18.5, lineHeight: 1.13, fontWeight: 900, margin: "2px 0 4px 0" }}>
              Duterte's ICC trial opens Monday — families demand justice
            </div>
            <div style={{ float: "right", margin: "2px 0 2px 8px" }}>
              <ScalesIcon />
            </div>
            <div style={{ fontSize: 12.6, lineHeight: 1.34, textAlign: "justify" }}>
              Former Philippine president <b>Rodrigo Duterte</b>, 81, goes on trial at the
              International Criminal Court on Monday, as families of those killed in his drug war
              still seek justice. He faces allegations over <b>85 murders and two attempted
              murders</b> from 2011 to 2018. Duterte will be asked to plead on Monday — a trial
              that will also test the court itself.
            </div>
          </div>
          <div style={{ borderTop: `3px solid ${INK}`, paddingTop: 6, marginTop: 10 }}>
            <Kicker>WHERE TODAY HAPPENED</Kicker>
            <div style={{ marginTop: 4 }}>
              <WorldMap />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, marginTop: 11 }}>
        {[
          {
            kicker: "TASMANIA · FIRE",
            icon: <FlameIcon />,
            title: "Flinders Island fire still burning: 13,000 hectares gone",
            body: (
              <>
                The lightning-sparked bushfire on Flinders Island in Bass Strait was still out of
                control on Friday, with about <b>13,000 hectares</b> burned. Emergency warnings
                remained in place around Mount Boyes and a Watch &amp; Act covered Palana. Earlier
                in the week nine people — plus a dog and a wombat — were taken off West End Beach
                by boat.
              </>
            ),
          },
          {
            kicker: "MARKETS · FRIDAY IN ASIA",
            icon: <ChartIcon />,
            title: "Shares steady after a bruising month; dollar reigns",
            body: (
              <>
                Asian shares steadied on Friday as a holiday lull calmed AI jitters: the Nikkei
                rose about <b>0.7%</b>, South Korean shares rallied <b>2%</b> and the Asia-Pacific
                index added 0.5% — still down 8.2% for November. With Wall Street shut for
                Thanksgiving, the <b>dollar index stood at 103.8</b>, near a third straight
                monthly gain.
              </>
            ),
          },
          {
            kicker: "BRUSSELS · EU SUMMIT",
            icon: <EuIcon />,
            title: "No deal yet: EU budget talks run on into December",
            body: (
              <>
                EU leaders' talks on the bloc's <b>€1.78 trillion 2028–2034 budget</b> continued
                on Friday with no agreement. A proposed loan for Ukraine drew the support of{" "}
                <b>24 member states</b>. Council president Costa urged leaders to show the
                willingness to negotiate that a timely deal will need.
              </>
            ),
          },
        ].map((c) => (
          <div key={c.kicker} style={{ flex: 1, borderTop: `3px solid ${INK}`, paddingTop: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <Kicker>{c.kicker}</Kicker>
              {c.icon}
            </div>
            <div style={{ fontSize: 18, lineHeight: 1.13, fontWeight: 900, margin: "2px 0 4px 0" }}>
              {c.title}
            </div>
            <div style={{ fontSize: 12.6, lineHeight: 1.33, textAlign: "justify" }}>{c.body}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 11,
          backgroundColor: INK,
          color: PAPER,
          padding: "6px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: SANS,
          fontSize: 12.5,
        }}
      >
        <span style={{ fontWeight: 700, color: GOLD }}>MARKETS</span>
        <span>NIKKEI <b style={{ color: "#7dc95f" }}>+0.7%</b></span>
        <span>KOSPI <b style={{ color: "#7dc95f" }}>+2%</b></span>
        <span>MSCI ASIA-PAC <b style={{ color: "#7dc95f" }}>+0.5%</b></span>
        <span>CHINA BLUE CHIPS <b style={{ color: "#e56a6a" }}>−0.2%</b></span>
        <span>DOLLAR INDEX <b>103.8</b></span>
        <span>WTI CRUDE <b>$84.03</b></span>
        <span>S&amp;P FUTURES <b style={{ color: "#7dc95f" }}>+0.8%</b></span>
        <span>NZD <b>$0.5482</b></span>
      </div>

      <div style={{ marginTop: 9, display: "flex", gap: 12, fontSize: 11.8 }}>
        {timeline.map(([t, text]) => (
          <div key={t} style={{ flex: 1, borderLeft: `3px solid ${GOLD}`, paddingLeft: 6, lineHeight: 1.3 }}>
            <div style={{ fontFamily: SANS, fontSize: 10, color: RED, fontWeight: 700, letterSpacing: 0.4 }}>
              {t}
            </div>
            {text}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, borderTop: `3px solid ${INK}`, paddingTop: 6 }}>
        <div style={{ fontFamily: SANS, fontSize: 12, letterSpacing: 2, color: RED, fontWeight: 700, marginBottom: 5 }}>
          MORE TODAY — FRIDAY 27 NOVEMBER 2026
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[moreLeft, moreRight].map((col, ci) => (
            <div key={ci} style={{ flex: 1 }}>
              {col.map(([place, text], i) => (
                <div key={place} style={{ fontSize: 11.3, lineHeight: 1.26, marginBottom: 3 }}>
                  <b>{ci * 7 + i + 1}. {place}</b> — {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 8,
          borderTop: `1.5px solid ${INK}`,
          paddingTop: 4,
          fontSize: 11,
          fontStyle: "italic",
          color: "#4c463a",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Drawn from reports dated 27 Nov 2026: Reuters, AP, Elections NZ, Tasmania Fire Service, KCNA, INSEE.</span>
        <span>One image · 1024 × 1024 · no network, same bytes every run</span>
      </div>
    </AbsoluteFill>
  );
};
