import { useState } from "react";
import { FoodComparison } from "./food-comparison";
import { moneyInput } from "@/data/food-costs";
import { formatQ } from "@/lib/site";
import { WhatsAppLink } from "./whatsapp-link";
import { AnimatedNumber, Label, Reveal } from "./ui-bits";

/* 05 — VALUE / NUMBERS */
const REF_CUOTA = 395.83;
const q = (n: number) =>
  `Q${n.toLocaleString("es-GT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export function HomeValueNumbers() {
  const [cenas, setCenas] = useState(600);
  const [delivery, setDelivery] = useState(300);
  const [preparados, setPreparados] = useState(200);

  const totalMes = Math.max(cenas, 0) + Math.max(delivery, 0) + Math.max(preparados, 0);
  const totalAno = totalMes * 12;
  const pct = totalMes > 0 ? (REF_CUOTA / totalMes) * 100 : 0;

  const campos: [string, number, (n: number) => void][] = [
    ["Cenas fuera al mes", cenas, setCenas],
    ["Delivery al mes", delivery, setDelivery],
    ["Comida preparada / súper al mes", preparados, setPreparados],
  ];

  return (
    <section id="home-savings" className="lux-value container-wide py-20 md:py-24">
      <Reveal>
        <Label tone="champagne">Tu cocina en números</Label>
        <h2 className="mt-6 max-w-2xl text-[2.6rem] leading-[0.95] md:text-[4.4rem]">
          Ponlo
          <br />
          <span className="italic">en perspectiva.</span>
        </h2>
        <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
          Ingresa lo que gastas hoy y compáralo con una cuota de referencia de Thermomix.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal className="calculator-inputs space-y-7">
          {campos.map(([label, val, set]) => (
            <label key={label} className="block border-b border-border pb-4">
              <span className="text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">
                {label}
              </span>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-2xl text-muted-foreground">Q</span>
                <input
                  type="number"
                  min={0}
                  value={val}
                  onChange={(e) => set(moneyInput(e.target.value))}
                  inputMode="decimal"
                  max={100000}
                  className="w-full bg-transparent font-display text-[2.6rem] leading-none outline-none md:text-[3.2rem]"
                  aria-label={label}
                />
              </div>
              <input
                type="range"
                min={0}
                max={Math.max(3000, val)}
                step={25}
                value={val}
                onChange={(e) => set(moneyInput(e.target.value))}
                aria-label={`${label}: ajustar monto`}
                className="money-range mt-4 w-full"
              />
            </label>
          ))}
        </Reveal>

        <Reveal delay={100} className="calculator-result">
          <p className="text-[0.66rem] uppercase tracking-[0.28em] text-muted-foreground">
            Tu gasto actual
          </p>
          <p className="mt-3 font-display text-[3.4rem] leading-[0.9] md:text-[5.2rem]">
            <AnimatedNumber value={totalMes} format={(n) => formatQ(n)} />{" "}
            <span className="text-lg text-muted-foreground">/ mes</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{formatQ(totalAno)} / año</p>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-champagne">
              Thermomix · referencia
            </p>
            <p className="mt-2 font-display text-[2.6rem] leading-[0.9] text-espresso md:text-[3.4rem]">
              {q(REF_CUOTA)} <span className="text-lg text-muted-foreground">/ mes*</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">hasta 48 cuotas</p>
            <div className="mt-5 h-px w-full bg-ink/70">
              <div
                className="h-px bg-champagne transition-all duration-700"
                style={{ width: `${totalMes > 0 ? Math.min(pct, 100) : 4}%` }}
              />
            </div>
            {totalMes > 0 && (
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Una cuota de referencia equivaldría aproximadamente al{" "}
                <span className="text-foreground">{pct.toFixed(1)}%</span> del gasto mensual que
                ingresaste.
              </p>
            )}
          </div>

          <div className="mt-10">
            <WhatsAppLink source="perspectiva" extra={`Mi gasto: ${formatQ(totalMes)} al mes.`}>
              Consultar con María Regina
            </WhatsAppLink>
          </div>

          <p className="mt-8 text-[0.7rem] leading-relaxed text-muted-foreground">
            Comparación orientativa basada en tus datos. No representa ahorro garantizado.
          </p>
        </Reveal>
      </div>

      {/* comparison table */}
      <div className="mt-24 border-t border-border pt-16">
        <Reveal>
          <Label tone="champagne">Comparación</Label>
          <h3 className="mt-5 max-w-2xl text-[2rem] leading-[0.98] md:text-[3rem]">
            Cosas que hoy compras
            <br />
            <span className="italic">y también puedes hacer en casa.</span>
          </h3>
          <details open className="lux-comparison-disclosure">
            <summary>
              Ver comparación <span aria-hidden="true">+</span>
            </summary>
            <FoodComparison />
          </details>
        </Reveal>
      </div>
    </section>
  );
}
