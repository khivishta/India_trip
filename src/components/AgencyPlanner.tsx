import { Download, Star } from "lucide-react";
import { getAgencyTasks, planningText, type AgencyTask } from "../data/planning";
import { type Language } from "../data/placeDetails";

function csvEscape(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

function downloadAgencyCsv(tasks: AgencyTask[]) {
  const header = ["Date", "City", "Pickup", "Dropoff", "Service", "Category", "Duration", "Action required", "Optional"];
  const rows = tasks.map((task) => [
    task.date,
    task.city,
    task.pickup,
    task.dropoff,
    task.service,
    task.category,
    task.duration,
    task.action,
    task.optional ? "Yes" : "No",
  ]);
  const csv = [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "india-2026-agency-booking-summary.csv";
  link.click();
  URL.revokeObjectURL(url);
}

export function AgencyPlanner({ language }: { language: Language }) {
  const t = planningText[language];
  const agencyTasks = getAgencyTasks(language);

  return (
    <section className="section agency-section" id="agency">
      <div className="section__heading section__heading--action">
        <div>
          <p className="eyebrow">{t.agencyEyebrow}</p>
          <h2>{t.agencyTitle}</h2>
          <p>{t.agencyIntro}</p>
        </div>
        <button className="export-button" onClick={() => downloadAgencyCsv(agencyTasks)} type="button">
          <Download size={18} /> {t.exportCsv}
        </button>
      </div>
      <div className="agency-table" role="table" aria-label={t.agencyTitle}>
        <div className="agency-table__header" role="row">
          <span>{language === "it" ? "Data" : "Date"}</span>
          <span>{t.pickup}</span>
          <span>{t.dropoff}</span>
          <span>{t.service}</span>
          <span>{t.action}</span>
        </div>
        {agencyTasks.map((task) => (
          <div className={`agency-row transport-row--${task.category}`} role="row" key={`${task.date}-${task.service}-${task.pickup}`}>
            <span>
              <strong>{task.date}</strong>
              <small>{task.city}</small>
            </span>
            <span>{task.pickup}</span>
            <span>{task.dropoff}</span>
            <span>
              <span className={`mode-pill mode-pill--${task.category}`}>{task.service}</span>
              <small>{task.duration}</small>
            </span>
            <span>
              {task.optional && <em>{t.optionalLabel}</em>}
              {task.action}
            </span>
          </div>
        ))}
      </div>
      <article className="vip-panel">
        <h3>
          <Star size={19} /> {t.vipTitle}
        </h3>
        <div className="vip-grid">
          {agencyTasks
            .filter((task) => task.category === "vip" || task.category === "optional")
            .map((task) => (
              <div className={`vip-item transport-row--${task.category}`} key={`${task.date}-${task.service}-vip`}>
                <strong>{task.service}</strong>
                <span>{task.date} · {task.city}</span>
                <small>{task.action}</small>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}
