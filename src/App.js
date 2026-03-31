import { useState } from "react";

const COLORS = {
  navy: "#0A1628", navyLight: "#112240", gold: "#C9A84C", goldLight: "#E8C97A",
  cream: "#F5F0E8", white: "#FFFFFF", slate: "#8892A4", slateLight: "#A8B2C4",
  green: "#2ECC71", red: "#E74C3C", blue: "#3498DB", orange: "#E67E22", purple: "#9B59B6",
};

const S = {
  app: { fontFamily: "'Georgia', serif", background: COLORS.cream, minHeight: "100vh", color: COLORS.navy },
  loginPage: { minHeight: "100vh", background: COLORS.navy, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" },
  loginBox: { background: COLORS.navyLight, border: `1px solid ${COLORS.gold}44`, borderRadius: "4px", padding: "48px", width: "100%", maxWidth: "400px" },
  loginTitle: { color: COLORS.gold, fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", textAlign: "center", marginBottom: "8px" },
  loginSubtitle: { color: COLORS.white, fontSize: "26px", textAlign: "center", marginBottom: "36px", fontWeight: "normal" },
  input: { width: "100%", padding: "12px 16px", background: COLORS.navy, border: `1px solid ${COLORS.gold}44`, borderRadius: "4px", color: COLORS.white, fontSize: "15px", marginBottom: "16px", boxSizing: "border-box", fontFamily: "'Georgia', serif", outline: "none" },
  loginBtn: { width: "100%", padding: "14px", background: COLORS.gold, border: "none", borderRadius: "4px", color: COLORS.navy, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Georgia', serif", fontWeight: "bold", marginTop: "8px" },
  layout: { display: "flex", minHeight: "100vh" },
  sidebar: { width: "240px", background: COLORS.navy, display: "flex", flexDirection: "column", flexShrink: 0, position: "fixed", top: 0, left: 0, bottom: 0, overflowY: "auto" },
  sidebarLogo: { padding: "28px 24px 20px", borderBottom: `1px solid ${COLORS.gold}33` },
  sidebarLogoText: { color: COLORS.gold, fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", display: "block", marginBottom: "4px" },
  sidebarLogoMain: { color: COLORS.white, fontSize: "18px", fontWeight: "normal" },
  navSection: { padding: "20px 0", borderBottom: `1px solid ${COLORS.gold}22` },
  navLabel: { color: COLORS.slate, fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", padding: "0 24px 8px", display: "block" },
  navItem: (active) => ({ display: "flex", alignItems: "center", gap: "12px", padding: "10px 24px", color: active ? COLORS.gold : COLORS.slateLight, background: active ? `${COLORS.gold}11` : "transparent", borderLeft: active ? `2px solid ${COLORS.gold}` : "2px solid transparent", cursor: "pointer", fontSize: "14px", transition: "all 0.15s", userSelect: "none" }),
  main: { marginLeft: "240px", flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" },
  topBar: { background: COLORS.white, borderBottom: `1px solid ${COLORS.navy}11`, padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 },
  pageTitle: { fontSize: "20px", color: COLORS.navy, fontWeight: "normal" },
  userBadge: { background: COLORS.navy, color: COLORS.gold, borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", cursor: "pointer" },
  content: { padding: "32px", flex: 1 },
  statGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "32px" },
  statCard: (color) => ({ background: COLORS.white, border: `1px solid ${COLORS.navy}11`, borderTop: `3px solid ${color}`, borderRadius: "4px", padding: "20px 24px" }),
  statLabel: { fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.slate, marginBottom: "8px" },
  statValue: { fontSize: "28px", color: COLORS.navy, fontWeight: "normal" },
  statSub: { fontSize: "12px", color: COLORS.slate, marginTop: "4px" },
  card: { background: COLORS.white, border: `1px solid ${COLORS.navy}11`, borderRadius: "4px", padding: "24px", marginBottom: "20px" },
  cardTitle: { fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: COLORS.gold, marginBottom: "20px" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "14px" },
  th: { textAlign: "left", padding: "8px 12px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.slate, borderBottom: `1px solid ${COLORS.navy}11` },
  td: { padding: "12px", borderBottom: `1px solid ${COLORS.navy}08`, color: COLORS.navy, verticalAlign: "middle" },
  badge: (color, bg) => ({ display: "inline-block", padding: "3px 10px", borderRadius: "2px", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color, background: bg }),
  btn: { padding: "10px 20px", background: COLORS.gold, border: "none", borderRadius: "4px", color: COLORS.navy, fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Georgia', serif", fontWeight: "bold" },
  btnOutline: { padding: "10px 20px", background: "transparent", border: `1px solid ${COLORS.navy}33`, borderRadius: "4px", color: COLORS.navy, fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Georgia', serif" },
  btnSmall: { padding: "6px 14px", background: COLORS.gold, border: "none", borderRadius: "4px", color: COLORS.navy, fontSize: "11px", cursor: "pointer", fontFamily: "'Georgia', serif", fontWeight: "bold" },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" },
  formGroup: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" },
  label: { fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.slate },
  formInput: { padding: "10px 14px", border: `1px solid ${COLORS.navy}22`, borderRadius: "4px", fontSize: "14px", fontFamily: "'Georgia', serif", color: COLORS.navy, background: COLORS.cream, outline: "none" },
  formSelect: { padding: "10px 14px", border: `1px solid ${COLORS.navy}22`, borderRadius: "4px", fontSize: "14px", fontFamily: "'Georgia', serif", color: COLORS.navy, background: COLORS.cream, outline: "none" },
  formTextarea: { padding: "10px 14px", border: `1px solid ${COLORS.navy}22`, borderRadius: "4px", fontSize: "14px", fontFamily: "'Georgia', serif", color: COLORS.navy, background: COLORS.cream, outline: "none", minHeight: "80px", resize: "vertical" },
  modal: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(10,22,40,0.7)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" },
  modalBox: { background: COLORS.white, borderRadius: "4px", padding: "32px", width: "100%", maxWidth: "640px", maxHeight: "90vh", overflowY: "auto", position: "relative" },
  modalTitle: { fontSize: "18px", color: COLORS.navy, marginBottom: "24px", fontWeight: "normal" },
  closeBtn: { position: "absolute", top: "16px", right: "16px", background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: COLORS.slate },
};

const initContacts = [
  { id: 1, name: "Robert Kline", company: "Kline Manufacturing", phone: "(212) 555-0182", email: "rkline@klinemfg.com", status: "Hot Lead", lastContact: "Mar 28", industry: "Manufacturing", notes: [] },
  { id: 2, name: "Sandra Okafor", company: "Okafor Logistics", phone: "(646) 555-0341", email: "sokafor@okaforlog.com", status: "Client", lastContact: "Mar 25", industry: "Logistics", notes: [] },
  { id: 3, name: "James Whitfield", company: "Whitfield Realty Group", phone: "(718) 555-0293", email: "jwhitfield@wrgny.com", status: "Prospect", lastContact: "Mar 20", industry: "Real Estate", notes: [] },
  { id: 4, name: "Maria Delgado", company: "Delgado Construction", phone: "(917) 555-0167", email: "mdelgado@delgadoco.com", status: "Hot Lead", lastContact: "Mar 29", industry: "Construction", notes: [] },
  { id: 5, name: "Thomas Brennan", company: "Brennan & Associates", phone: "(212) 555-0448", email: "tbrennan@brennanassoc.com", status: "Client", lastContact: "Mar 15", industry: "Professional Services", notes: [] },
];

const initLeads = [
  { id: 1, name: "City Plumbing Co", contact: "Dave Park", phone: "(212) 555-0321", source: "Referral", status: "New", created: "Mar 29" },
  { id: 2, name: "Sunrise Bakery Chain", contact: "Lena Moss", phone: "(646) 555-0198", source: "Cold Call", status: "Contacted", created: "Mar 27" },
  { id: 3, name: "Brooklyn Auto Group", contact: "Frank Russo", phone: "(718) 555-0447", source: "LinkedIn", status: "Qualified", created: "Mar 25" },
];

const initDeals = [
  { id: 1, name: "Kline Mfg — BOP Policy", contactId: 1, value: "$42,000", stage: "Proposal", close: "2026-04-15", policyType: "BOP", carrier: "Travelers", notes: "", uwInfo: "" },
  { id: 2, name: "Delgado — Workers Comp", contactId: 4, value: "$28,500", stage: "Quoting", close: "2026-04-30", policyType: "Workers Comp", carrier: "Hartford", notes: "", uwInfo: "" },
  { id: 3, name: "Whitfield — Property", contactId: 3, value: "$67,000", stage: "Prospecting", close: "2026-05-20", policyType: "Property", carrier: "Chubb", notes: "", uwInfo: "" },
  { id: 4, name: "Brennan — Umbrella", contactId: 5, value: "$15,000", stage: "Closed Won", close: "2026-03-10", policyType: "Umbrella", carrier: "AIG", notes: "", uwInfo: "" },
];

const initTasks = [
  { id: 1, task: "Follow up — Kline quote", contact: "Robert Kline", due: "2026-03-31", priority: "High", done: false },
  { id: 2, task: "Send renewal docs", contact: "Sandra Okafor", due: "2026-04-02", priority: "High", done: false },
  { id: 3, task: "Schedule meeting", contact: "James Whitfield", due: "2026-04-05", priority: "Medium", done: false },
  { id: 4, task: "Request loss runs", contact: "Maria Delgado", due: "2026-04-03", priority: "Medium", done: false },
];

const initServicing = [
  { id: 1, dealId: 1, type: "Certificate", status: "Open", due: "2026-04-02", notes: "Need additional insured added" },
  { id: 2, dealId: 2, type: "Renewal", status: "In Progress", due: "2026-04-30", notes: "Loss runs requested" },
];

const POLICY_TYPES = ["BOP", "General Liability", "Workers Comp", "Property", "Umbrella", "Commercial Auto", "Cyber", "Professional Liability", "Directors & Officers", "Other"];
const CARRIERS = ["Travelers", "Hartford", "Chubb", "AIG", "Liberty Mutual", "Nationwide", "CNA", "Markel", "Hiscox", "Berkley", "Other"];
const DEAL_STAGES = ["Prospecting", "Quoting", "Proposal", "Negotiation", "Closed Won", "Closed Lost"];
const SERVICE_TYPES = ["Certificate", "Evidence of Insurance", "Renewal", "Endorsement", "General Question", "Claim", "Cancellation", "Other"];
const LEAD_SOURCES = ["Referral", "Cold Call", "LinkedIn", "Website", "Email Campaign", "Networking", "Other"];

function StatusBadge({ status }) {
  const map = {
    "Hot Lead": [COLORS.red, "#FDECEA"], "Client": [COLORS.green, "#E8F8F0"], "Prospect": [COLORS.blue, "#EAF4FB"],
    "Closed Won": [COLORS.green, "#E8F8F0"], "Closed Lost": [COLORS.red, "#FDECEA"],
    "Proposal": [COLORS.orange, "#FEF5EC"], "Quoting": [COLORS.blue, "#EAF4FB"],
    "Prospecting": [COLORS.slate, "#F0F2F5"], "Negotiation": [COLORS.purple, "#F5EEF8"],
    "High": [COLORS.red, "#FDECEA"], "Medium": [COLORS.orange, "#FEF5EC"], "Low": [COLORS.slate, "#F0F2F5"],
    "New": [COLORS.blue, "#EAF4FB"], "Contacted": [COLORS.orange, "#FEF5EC"],
    "Qualified": [COLORS.green, "#E8F8F0"], "Converted": [COLORS.purple, "#F5EEF8"], "Dead": [COLORS.slate, "#F0F2F5"],
    "Open": [COLORS.red, "#FDECEA"], "In Progress": [COLORS.orange, "#FEF5EC"], "Complete": [COLORS.green, "#E8F8F0"],
  };
  const [color, bg] = map[status] || [COLORS.slate, "#F0F2F5"];
  return <span style={S.badge(color, bg)}>{status}</span>;
}

function useAppState() {
  const [contacts, setContacts] = useState(initContacts);
  const [leads, setLeads] = useState(initLeads);
  const [deals, setDeals] = useState(initDeals);
  const [tasks, setTasks] = useState(initTasks);
  const [servicing, setServicing] = useState(initServicing);
  return { contacts, setContacts, leads, setLeads, deals, setDeals, tasks, setTasks, servicing, setServicing };
}

function ContactModal({ contact, onClose, onUpdate }) {
  const [tab, setTab] = useState("info");
  const [note, setNote] = useState("");
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...contact });

  function addNote() {
    if (!note.trim()) return;
    const updated = { ...contact, notes: [...(contact.notes || []), { text: note, date: new Date().toLocaleDateString() }] };
    onUpdate(updated);
    setNote("");
  }

  function saveEdit() { onUpdate(form); setEditing(false); }

  return (
    <div style={S.modal} onClick={onClose}>
      <div style={S.modalBox} onClick={e => e.stopPropagation()}>
        <button style={S.closeBtn} onClick={onClose}>✕</button>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: COLORS.navyLight, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.gold, fontSize: "18px" }}>
            {contact.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <div style={{ fontSize: "20px" }}>{contact.name}</div>
            <div style={{ fontSize: "13px", color: COLORS.slate }}>{contact.company}</div>
          </div>
          <div style={{ marginLeft: "auto" }}><StatusBadge status={contact.status} /></div>
        </div>
        <div style={{ display: "flex", gap: "0", marginBottom: "24px", borderBottom: `2px solid ${COLORS.navy}11` }}>
          {["info", "notes"].map(t => <div key={t} style={{ padding: "10px 24px", cursor: "pointer", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", color: tab === t ? COLORS.gold : COLORS.slate, borderBottom: tab === t ? `2px solid ${COLORS.gold}` : "2px solid transparent", marginBottom: "-2px", userSelect: "none" }} onClick={() => setTab(t)}>{t}</div>)}
        </div>
        {tab === "info" && (editing ? (
          <div>
            <div style={S.formRow}>
              <div style={S.formGroup}><label style={S.label}>Name</label><input style={S.formInput} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
              <div style={S.formGroup}><label style={S.label}>Company</label><input style={S.formInput} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} /></div>
            </div>
            <div style={S.formRow}>
              <div style={S.formGroup}><label style={S.label}>Phone</label><input style={S.formInput} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
              <div style={S.formGroup}><label style={S.label}>Email</label><input style={S.formInput} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            </div>
            <div style={S.formRow}>
              <div style={S.formGroup}><label style={S.label}>Industry</label><input style={S.formInput} value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })} /></div>
              <div style={S.formGroup}><label style={S.label}>Status</label>
                <select style={S.formSelect} value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                  <option>Prospect</option><option>Hot Lead</option><option>Client</option>
                </select>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button style={S.btn} onClick={saveEdit}>Save</button>
              <button style={S.btnOutline} onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            {[["Phone", contact.phone], ["Email", contact.email], ["Industry", contact.industry], ["Last Contact", contact.lastContact]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px solid ${COLORS.navy}08` }}>
                <span style={{ fontSize: "12px", color: COLORS.slate, textTransform: "uppercase", letterSpacing: "1px" }}>{k}</span>
                <span style={{ fontSize: "14px" }}>{v}</span>
              </div>
            ))}
            <div style={{ marginTop: "20px" }}><button style={S.btn} onClick={() => setEditing(true)}>Edit Contact</button></div>
          </div>
        ))}
        {tab === "notes" && (
          <div>
            <div style={S.formGroup}><label style={S.label}>Add Note</label><textarea style={S.formTextarea} value={note} onChange={e => setNote(e.target.value)} placeholder="Type a note..." /></div>
            <button style={{ ...S.btn, marginBottom: "24px" }} onClick={addNote}>Add Note</button>
            {(contact.notes || []).length === 0 && <div style={{ color: COLORS.slate, fontSize: "13px" }}>No notes yet.</div>}
            {(contact.notes || []).map((n, i) => (
              <div key={i} style={{ background: COLORS.cream, borderRadius: "4px", padding: "12px 16px", marginBottom: "10px" }}>
                <div style={{ fontSize: "14px", marginBottom: "6px" }}>{n.text}</div>
                <div style={{ fontSize: "11px", color: COLORS.slate }}>{n.date}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DealModal({ deal, contacts, onClose, onUpdate }) {
  const [form, setForm] = useState({ ...deal });
  const contact = contacts.find(c => c.id === deal.contactId);
  function save() { onUpdate(form); onClose(); }
  return (
    <div style={S.modal} onClick={onClose}>
      <div style={S.modalBox} onClick={e => e.stopPropagation()}>
        <button style={S.closeBtn} onClick={onClose}>✕</button>
        <div style={S.modalTitle}>{deal.name}</div>
        {contact && <div style={{ marginBottom: "20px", padding: "12px 16px", background: COLORS.cream, borderRadius: "4px", fontSize: "13px", color: COLORS.slate }}>Contact: <strong style={{ color: COLORS.navy }}>{contact.name}</strong> — {contact.company}</div>}
        <div style={S.formRow}>
          <div style={S.formGroup}><label style={S.label}>Deal Name</label><input style={S.formInput} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
          <div style={S.formGroup}><label style={S.label}>Premium Value</label><input style={S.formInput} value={form.value} onChange={e => setForm({ ...form, value: e.target.value })} /></div>
        </div>
        <div style={S.formRow}>
          <div style={S.formGroup}><label style={S.label}>Policy Type</label>
            <select style={S.formSelect} value={form.policyType} onChange={e => setForm({ ...form, policyType: e.target.value })}>
              {POLICY_TYPES.map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div style={S.formGroup}><label style={S.label}>Carrier</label>
            <select style={S.formSelect} value={form.carrier} onChange={e => setForm({ ...form, carrier: e.target.value })}>
              {CARRIERS.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div style={S.formRow}>
          <div style={S.formGroup}><label style={S.label}>Stage</label>
            <select style={S.formSelect} value={form.stage} onChange={e => setForm({ ...form, stage: e.target.value })}>
              {DEAL_STAGES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div style={S.formGroup}><label style={S.label}>Expected Close</label><input style={S.formInput} type="date" value={form.close} onChange={e => setForm({ ...form, close: e.target.value })} /></div>
        </div>
        <div style={S.formGroup}><label style={S.label}>Underwriting Notes</label><textarea style={S.formTextarea} value={form.uwInfo} onChange={e => setForm({ ...form, uwInfo: e.target.value })} placeholder="Deductibles, limits, exposures, loss history..." /></div>
        <div style={S.formGroup}><label style={S.label}>Deal Notes</label><textarea style={S.formTextarea} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="General notes..." /></div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button style={S.btn} onClick={save}>Save Deal</button>
          <button style={S.btnOutline} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ tasks, deals, contacts, servicing }) {
  const todayStr = new Date().toISOString().split("T")[0];
  const dueTasks = tasks.filter(t => !t.done);
  const overdue = tasks.filter(t => !t.done && t.due < todayStr);
  return (
    <div>
      <div style={S.statGrid}>
        <div style={S.statCard(COLORS.gold)}>
          <div style={S.statLabel}>Active Clients</div>
          <div style={S.statValue}>{contacts.filter(c => c.status === "Client").length}</div>
          <div style={S.statSub}>Total contacts: {contacts.length}</div>
        </div>
        <div style={S.statCard(COLORS.red)}>
          <div style={S.statLabel}>Hot Leads</div>
          <div style={S.statValue}>{contacts.filter(c => c.status === "Hot Lead").length}</div>
          <div style={S.statSub}>Needs attention</div>
        </div>
        <div style={S.statCard(COLORS.blue)}>
          <div style={S.statLabel}>Pipeline Value</div>
          <div style={S.statValue}>${deals.filter(d => d.stage !== "Closed Lost").reduce((sum, d) => sum + parseInt((d.value || "0").replace(/\D/g, "") || 0), 0).toLocaleString()}</div>
          <div style={S.statSub}>{deals.filter(d => !["Closed Won", "Closed Lost"].includes(d.stage)).length} open deals</div>
        </div>
        <div style={S.statCard(COLORS.orange)}>
          <div style={S.statLabel}>Renewals Due</div>
          <div style={S.statValue}>{servicing.filter(s => s.type === "Renewal" && s.status !== "Complete").length}</div>
          <div style={S.statSub}>Next 30 days</div>
        </div>
        <div style={S.statCard(COLORS.purple)}>
          <div style={S.statLabel}>Tasks Due</div>
          <div style={S.statValue}>{dueTasks.length}</div>
          <div style={S.statSub}>{overdue.length > 0 ? `${overdue.length} overdue` : "All on track"}</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={S.card}>
          <div style={S.cardTitle}>Tasks Due Soon</div>
          {dueTasks.slice(0, 5).map(t => (
            <div key={t.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${COLORS.navy}08` }}>
              <div>
                <div style={{ fontSize: "14px", marginBottom: "2px" }}>{t.task}</div>
                <div style={{ fontSize: "12px", color: COLORS.slate }}>{t.contact}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <StatusBadge status={t.priority} />
                <div style={{ fontSize: "11px", color: t.due < todayStr ? COLORS.red : COLORS.slate, marginTop: "4px" }}>{t.due}</div>
              </div>
            </div>
          ))}
          {dueTasks.length === 0 && <div style={{ color: COLORS.slate, fontSize: "13px" }}>No pending tasks!</div>}
        </div>
        <div style={S.card}>
          <div style={S.cardTitle}>Recent Deals</div>
          {deals.slice(0, 5).map(d => {
            const c = contacts.find(x => x.id === d.contactId);
            return (
              <div key={d.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${COLORS.navy}08` }}>
                <div>
                  <div style={{ fontSize: "14px", marginBottom: "2px" }}>{d.name}</div>
                  <div style={{ fontSize: "12px", color: COLORS.slate }}>{c ? c.name : "—"}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "15px" }}>{d.value}</div>
                  <StatusBadge status={d.stage} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ContactsPage({ contacts, setContacts }) {
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", status: "Prospect", industry: "", notes: [] });

  function handleAdd() {
    if (!form.name) return;
    setContacts([...contacts, { ...form, id: Date.now(), lastContact: "Today" }]);
    setForm({ name: "", company: "", phone: "", email: "", status: "Prospect", industry: "", notes: [] });
    setShowForm(false);
  }

  function handleUpdate(updated) {
    setContacts(contacts.map(c => c.id === updated.id ? updated : c));
    setSelected(updated);
  }

  return (
    <div>
      {selected && <ContactModal contact={selected} onClose={() => setSelected(null)} onUpdate={handleUpdate} />}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ fontSize: "13px", color: COLORS.slate }}>{contacts.length} contacts</div>
        <button style={S.btn} onClick={() => setShowForm(!showForm)}>+ Add Contact</button>
      </div>
      {showForm && (
        <div style={{ ...S.card, borderTop: `3px solid ${COLORS.gold}` }}>
          <div style={S.cardTitle}>New Contact</div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Full Name</label><input style={S.formInput} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith" /></div>
            <div style={S.formGroup}><label style={S.label}>Company</label><input style={S.formInput} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="ABC Corp" /></div>
          </div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Phone</label><input style={S.formInput} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(212) 555-0000" /></div>
            <div style={S.formGroup}><label style={S.label}>Email</label><input style={S.formInput} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@abc.com" /></div>
          </div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Industry</label><input style={S.formInput} value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })} placeholder="Construction" /></div>
            <div style={S.formGroup}><label style={S.label}>Status</label>
              <select style={S.formSelect} value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                <option>Prospect</option><option>Hot Lead</option><option>Client</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={S.btn} onClick={handleAdd}>Save Contact</button>
            <button style={S.btnOutline} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
      <div style={S.card}>
        <table style={S.table}>
          <thead><tr>
            <th style={S.th}>Name</th><th style={S.th}>Company</th><th style={S.th}>Phone</th>
            <th style={S.th}>Industry</th><th style={S.th}>Status</th><th style={S.th}>Last Contact</th>
          </tr></thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id}>
                <td style={S.td}><span style={{ cursor: "pointer", color: COLORS.blue, fontWeight: "bold" }} onClick={() => setSelected(c)}>{c.name}</span></td>
                <td style={S.td}>{c.company}</td><td style={S.td}>{c.phone}</td>
                <td style={S.td}>{c.industry}</td>
                <td style={S.td}><StatusBadge status={c.status} /></td>
                <td style={{ ...S.td, color: COLORS.slate }}>{c.lastContact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LeadsPage({ leads, setLeads, contacts, setContacts }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", phone: "", source: "Referral", status: "New" });

  function handleAdd() {
    if (!form.name) return;
    setLeads([...leads, { ...form, id: Date.now(), created: new Date().toLocaleDateString() }]);
    setForm({ name: "", contact: "", phone: "", source: "Referral", status: "New" });
    setShowForm(false);
  }

  function convertToContact(lead) {
    const nc = { id: Date.now(), name: lead.contact, company: lead.name, phone: lead.phone, email: "", status: "Prospect", industry: "", lastContact: "Today", notes: [] };
    setContacts([...contacts, nc]);
    setLeads(leads.map(l => l.id === lead.id ? { ...l, status: "Converted" } : l));
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ fontSize: "13px", color: COLORS.slate }}>{leads.length} leads</div>
        <button style={S.btn} onClick={() => setShowForm(!showForm)}>+ Add Lead</button>
      </div>
      {showForm && (
        <div style={{ ...S.card, borderTop: `3px solid ${COLORS.gold}` }}>
          <div style={S.cardTitle}>New Lead</div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Business Name</label><input style={S.formInput} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="ABC Corp" /></div>
            <div style={S.formGroup}><label style={S.label}>Contact Name</label><input style={S.formInput} value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="John Smith" /></div>
          </div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Phone</label><input style={S.formInput} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(212) 555-0000" /></div>
            <div style={S.formGroup}><label style={S.label}>Lead Source</label>
              <select style={S.formSelect} value={form.source} onChange={e => setForm({ ...form, source: e.target.value })}>
                {LEAD_SOURCES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={S.btn} onClick={handleAdd}>Save Lead</button>
            <button style={S.btnOutline} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
      <div style={S.card}>
        <table style={S.table}>
          <thead><tr>
            <th style={S.th}>Business</th><th style={S.th}>Contact</th><th style={S.th}>Phone</th>
            <th style={S.th}>Source</th><th style={S.th}>Status</th><th style={S.th}>Created</th><th style={S.th}>Action</th>
          </tr></thead>
          <tbody>
            {leads.map(l => (
              <tr key={l.id}>
                <td style={{ ...S.td, fontWeight: "bold" }}>{l.name}</td>
                <td style={S.td}>{l.contact}</td><td style={S.td}>{l.phone}</td>
                <td style={S.td}>{l.source}</td>
                <td style={S.td}><StatusBadge status={l.status} /></td>
                <td style={{ ...S.td, color: COLORS.slate }}>{l.created}</td>
                <td style={S.td}>{l.status !== "Converted" && <button style={S.btnSmall} onClick={() => convertToContact(l)}>Convert</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DealsPage({ deals, setDeals, contacts, setContacts }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [newContact, setNewContact] = useState(false);
  const [form, setForm] = useState({ name: "", contactId: "", value: "", stage: "Prospecting", close: "", policyType: "BOP", carrier: "Travelers", notes: "", uwInfo: "" });
  const [ncForm, setNcForm] = useState({ name: "", company: "", phone: "", email: "" });

  function handleAdd() {
    if (!form.name) return;
    let cid = form.contactId;
    if (newContact && ncForm.name) {
      const nc = { id: Date.now(), name: ncForm.name, company: ncForm.company, phone: ncForm.phone, email: ncForm.email, status: "Prospect", industry: "", lastContact: "Today", notes: [] };
      setContacts(prev => [...prev, nc]);
      cid = nc.id;
    }
    setDeals([...deals, { ...form, contactId: parseInt(cid) || cid, id: Date.now() + 1 }]);
    setForm({ name: "", contactId: "", value: "", stage: "Prospecting", close: "", policyType: "BOP", carrier: "Travelers", notes: "", uwInfo: "" });
    setShowForm(false); setNewContact(false);
  }

  function handleUpdate(updated) {
    setDeals(deals.map(d => d.id === updated.id ? updated : d));
    setSelectedDeal(updated);
  }

  return (
    <div>
      {selectedDeal && <DealModal deal={selectedDeal} contacts={contacts} onClose={() => setSelectedDeal(null)} onUpdate={handleUpdate} />}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ fontSize: "13px", color: COLORS.slate }}>{deals.length} deals</div>
        <button style={S.btn} onClick={() => setShowForm(!showForm)}>+ Add Deal</button>
      </div>
      {showForm && (
        <div style={{ ...S.card, borderTop: `3px solid ${COLORS.gold}` }}>
          <div style={S.cardTitle}>New Deal</div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Deal Name</label><input style={S.formInput} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="ABC Corp — BOP Policy" /></div>
            <div style={S.formGroup}><label style={S.label}>Premium Value</label><input style={S.formInput} value={form.value} onChange={e => setForm({ ...form, value: e.target.value })} placeholder="$25,000" /></div>
          </div>
          <div style={S.formGroup}>
            <label style={S.label}>Contact</label>
            <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
              <button style={!newContact ? S.btn : S.btnOutline} onClick={() => setNewContact(false)}>Existing</button>
              <button style={newContact ? S.btn : S.btnOutline} onClick={() => setNewContact(true)}>+ New Person</button>
            </div>
            {!newContact ? (
              <select style={S.formSelect} value={form.contactId} onChange={e => setForm({ ...form, contactId: e.target.value })}>
                <option value="">Select a contact...</option>
                {contacts.map(c => <option key={c.id} value={c.id}>{c.name} — {c.company}</option>)}
              </select>
            ) : (
              <div style={S.formRow}>
                <div style={S.formGroup}><label style={S.label}>Name</label><input style={S.formInput} value={ncForm.name} onChange={e => setNcForm({ ...ncForm, name: e.target.value })} /></div>
                <div style={S.formGroup}><label style={S.label}>Company</label><input style={S.formInput} value={ncForm.company} onChange={e => setNcForm({ ...ncForm, company: e.target.value })} /></div>
                <div style={S.formGroup}><label style={S.label}>Phone</label><input style={S.formInput} value={ncForm.phone} onChange={e => setNcForm({ ...ncForm, phone: e.target.value })} /></div>
                <div style={S.formGroup}><label style={S.label}>Email</label><input style={S.formInput} value={ncForm.email} onChange={e => setNcForm({ ...ncForm, email: e.target.value })} /></div>
              </div>
            )}
          </div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Policy Type</label>
              <select style={S.formSelect} value={form.policyType} onChange={e => setForm({ ...form, policyType: e.target.value })}>
                {POLICY_TYPES.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div style={S.formGroup}><label style={S.label}>Carrier</label>
              <select style={S.formSelect} value={form.carrier} onChange={e => setForm({ ...form, carrier: e.target.value })}>
                {CARRIERS.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Stage</label>
              <select style={S.formSelect} value={form.stage} onChange={e => setForm({ ...form, stage: e.target.value })}>
                {DEAL_STAGES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div style={S.formGroup}><label style={S.label}>Expected Close</label><input style={S.formInput} type="date" value={form.close} onChange={e => setForm({ ...form, close: e.target.value })} /></div>
          </div>
          <div style={S.formGroup}><label style={S.label}>Underwriting Notes</label><textarea style={S.formTextarea} value={form.uwInfo} onChange={e => setForm({ ...form, uwInfo: e.target.value })} placeholder="Limits, deductibles, exposures, loss history..." /></div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={S.btn} onClick={handleAdd}>Save Deal</button>
            <button style={S.btnOutline} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
      <div style={S.card}>
        <table style={S.table}>
          <thead><tr>
            <th style={S.th}>Deal</th><th style={S.th}>Contact</th><th style={S.th}>Policy</th>
            <th style={S.th}>Carrier</th><th style={S.th}>Value</th><th style={S.th}>Stage</th><th style={S.th}>Close</th>
          </tr></thead>
          <tbody>
            {deals.map(d => {
              const c = contacts.find(x => x.id === d.contactId);
              return (
                <tr key={d.id}>
                  <td style={S.td}><span style={{ cursor: "pointer", color: COLORS.blue, fontWeight: "bold" }} onClick={() => setSelectedDeal(d)}>{d.name}</span></td>
                  <td style={S.td}>{c ? c.name : "—"}</td>
                  <td style={S.td}>{d.policyType}</td><td style={S.td}>{d.carrier}</td>
                  <td style={S.td}>{d.value}</td>
                  <td style={S.td}><StatusBadge status={d.stage} /></td>
                  <td style={{ ...S.td, color: COLORS.slate }}>{d.close}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PipelineBoard({ deals, contacts }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
      {DEAL_STAGES.map(stage => (
        <div key={stage} style={{ background: COLORS.white, border: `1px solid ${COLORS.navy}11`, borderRadius: "4px", padding: "16px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.slate, marginBottom: "4px" }}>{stage}</div>
          <div style={{ fontSize: "12px", color: COLORS.gold, marginBottom: "12px" }}>
            ${deals.filter(d => d.stage === stage).reduce((s, d) => s + parseInt((d.value || "0").replace(/\D/g, "") || 0), 0).toLocaleString()}
          </div>
          {deals.filter(d => d.stage === stage).map(d => {
            const c = contacts.find(x => x.id === d.contactId);
            return (
              <div key={d.id} style={{ background: COLORS.cream, border: `1px solid ${COLORS.navy}11`, borderRadius: "4px", padding: "12px", marginBottom: "8px" }}>
                <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}>{d.name}</div>
                <div style={{ fontSize: "11px", color: COLORS.slate, marginBottom: "4px" }}>{c ? c.name : "—"}</div>
                <div style={{ fontSize: "13px" }}>{d.value}</div>
                <div style={{ fontSize: "11px", color: COLORS.slate }}>{d.policyType} — {d.carrier}</div>
              </div>
            );
          })}
          {deals.filter(d => d.stage === stage).length === 0 && <div style={{ fontSize: "12px", color: COLORS.slateLight, textAlign: "center", padding: "16px 0" }}>No deals</div>}
        </div>
      ))}
    </div>
  );
}

function TasksPage({ tasks, setTasks }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ task: "", contact: "", due: "", priority: "Medium", done: false });
  const todayStr = new Date().toISOString().split("T")[0];

  function handleAdd() {
    if (!form.task) return;
    setTasks([...tasks, { ...form, id: Date.now() }]);
    setForm({ task: "", contact: "", due: "", priority: "Medium", done: false });
    setShowForm(false);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ fontSize: "13px", color: COLORS.slate }}>{tasks.filter(t => !t.done).length} tasks remaining</div>
        <button style={S.btn} onClick={() => setShowForm(!showForm)}>+ Add Task</button>
      </div>
      {showForm && (
        <div style={{ ...S.card, borderTop: `3px solid ${COLORS.gold}` }}>
          <div style={S.cardTitle}>New Task</div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Task</label><input style={S.formInput} value={form.task} onChange={e => setForm({ ...form, task: e.target.value })} placeholder="Follow up on quote" /></div>
            <div style={S.formGroup}><label style={S.label}>Contact</label><input style={S.formInput} value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="John Smith" /></div>
          </div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Due Date</label><input style={S.formInput} type="date" value={form.due} onChange={e => setForm({ ...form, due: e.target.value })} /></div>
            <div style={S.formGroup}><label style={S.label}>Priority</label>
              <select style={S.formSelect} value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value })}>
                <option>High</option><option>Medium</option><option>Low</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={S.btn} onClick={handleAdd}>Save Task</button>
            <button style={S.btnOutline} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
      <div style={S.card}>
        <table style={S.table}>
          <thead><tr>
            <th style={S.th}>Done</th><th style={S.th}>Task</th><th style={S.th}>Contact</th>
            <th style={S.th}>Due</th><th style={S.th}>Priority</th>
          </tr></thead>
          <tbody>
            {tasks.map(t => (
              <tr key={t.id} style={{ opacity: t.done ? 0.4 : 1 }}>
                <td style={S.td}><input type="checkbox" checked={t.done} onChange={() => setTasks(tasks.map(x => x.id === t.id ? { ...x, done: !x.done } : x))} style={{ cursor: "pointer", width: "16px", height: "16px" }} /></td>
                <td style={{ ...S.td, textDecoration: t.done ? "line-through" : "none" }}>{t.task}</td>
                <td style={S.td}>{t.contact}</td>
                <td style={{ ...S.td, color: t.due < todayStr && !t.done ? COLORS.red : COLORS.slate }}>{t.due}</td>
                <td style={S.td}><StatusBadge status={t.priority} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ServicingPage({ servicing, setServicing, deals, contacts }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ dealId: "", type: "Certificate", status: "Open", due: "", notes: "" });
  const todayStr = new Date().toISOString().split("T")[0];

  function handleAdd() {
    if (!form.dealId) return;
    setServicing([...servicing, { ...form, id: Date.now(), dealId: parseInt(form.dealId) }]);
    setForm({ dealId: "", type: "Certificate", status: "Open", due: "", notes: "" });
    setShowForm(false);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ fontSize: "13px", color: COLORS.slate }}>{servicing.filter(s => s.status !== "Complete").length} open requests</div>
        <button style={S.btn} onClick={() => setShowForm(!showForm)}>+ New Request</button>
      </div>
      {showForm && (
        <div style={{ ...S.card, borderTop: `3px solid ${COLORS.gold}` }}>
          <div style={S.cardTitle}>New Service Request</div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Deal / Policy</label>
              <select style={S.formSelect} value={form.dealId} onChange={e => setForm({ ...form, dealId: e.target.value })}>
                <option value="">Select a deal...</option>
                {deals.map(d => {
                  const c = contacts.find(x => x.id === d.contactId);
                  return <option key={d.id} value={d.id}>{d.name}{c ? ` — ${c.name}` : ""}</option>;
                })}
              </select>
            </div>
            <div style={S.formGroup}><label style={S.label}>Service Type</label>
              <select style={S.formSelect} value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                {SERVICE_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div style={S.formRow}>
            <div style={S.formGroup}><label style={S.label}>Due Date</label><input style={S.formInput} type="date" value={form.due} onChange={e => setForm({ ...form, due: e.target.value })} /></div>
            <div style={S.formGroup}><label style={S.label}>Status</label>
              <select style={S.formSelect} value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                <option>Open</option><option>In Progress</option><option>Complete</option>
              </select>
            </div>
          </div>
          <div style={S.formGroup}><label style={S.label}>Notes</label><textarea style={S.formTextarea} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Details about this request..." /></div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={S.btn} onClick={handleAdd}>Save Request</button>
            <button style={S.btnOutline} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
      <div style={S.card}>
        <table style={S.table}>
          <thead><tr>
            <th style={S.th}>Deal / Policy</th><th style={S.th}>Client</th><th style={S.th}>Type</th>
            <th style={S.th}>Due</th><th style={S.th}>Status</th><th style={S.th}>Notes</th><th style={S.th}>Action</th>
          </tr></thead>
          <tbody>
            {servicing.map(s => {
              const deal = deals.find(d => d.id === s.dealId);
              const contact = deal ? contacts.find(c => c.id === deal.contactId) : null;
              const overdue = s.due && s.due < todayStr && s.status !== "Complete";
              return (
                <tr key={s.id} style={{ opacity: s.status === "Complete" ? 0.5 : 1 }}>
                  <td style={{ ...S.td, fontWeight: "bold" }}>{deal ? deal.name : "—"}</td>
                  <td style={S.td}>{contact ? contact.name : "—"}</td>
                  <td style={S.td}>{s.type}</td>
                  <td style={{ ...S.td, color: overdue ? COLORS.red : COLORS.slate }}>{s.due}{overdue ? " ⚠" : ""}</td>
                  <td style={S.td}><StatusBadge status={s.status} /></td>
                  <td style={{ ...S.td, color: COLORS.slate, fontSize: "12px" }}>{s.notes}</td>
                  <td style={S.td}>{s.status !== "Complete" && <button style={S.btnSmall} onClick={() => setServicing(servicing.map(x => x.id === s.id ? { ...x, status: "Complete" } : x))}>Done</button>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CalendarPage({ tasks, servicing, deals, contacts }) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;

  function getEvents(day) {
    const ds = `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    const ev = [];
    tasks.filter(t => t.due === ds && !t.done).forEach(t => ev.push({ label: t.task, color: COLORS.blue, sub: t.contact }));
    servicing.filter(s => s.due === ds && s.status !== "Complete").forEach(s => {
      const deal = deals.find(d => d.id === s.dealId);
      ev.push({ label: s.type, color: COLORS.orange, sub: deal ? deal.name : "" });
    });
    deals.filter(d => d.close === ds).forEach(d => ev.push({ label: `Close: ${d.name}`, color: COLORS.gold, sub: d.stage }));
    return ev;
  }

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
        <button style={S.btnOutline} onClick={() => setViewDate(new Date(year, month-1, 1))}>← Prev</button>
        <h2 style={{ fontSize: "20px", fontWeight: "normal", margin: 0 }}>{monthNames[month]} {year}</h2>
        <button style={S.btnOutline} onClick={() => setViewDate(new Date(year, month+1, 1))}>Next →</button>
      </div>
      <div style={S.card}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "1px", background: `${COLORS.navy}11` }}>
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
            <div key={d} style={{ background: COLORS.cream, padding: "8px", textAlign: "center", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.slate }}>{d}</div>
          ))}
          {cells.map((day, i) => {
            const isToday = day && `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}` === todayStr;
            const events = day ? getEvents(day) : [];
            return (
              <div key={i} style={{ background: COLORS.white, minHeight: "90px", padding: "8px" }}>
                {day && <>
                  <div style={{ fontSize: "13px", fontWeight: isToday ? "bold" : "normal", color: isToday ? COLORS.white : COLORS.navy, background: isToday ? COLORS.gold : "transparent", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "4px" }}>{day}</div>
                  {events.map((e, ei) => (
                    <div key={ei} style={{ background: e.color, borderRadius: "2px", padding: "2px 6px", marginBottom: "2px", fontSize: "10px", color: COLORS.white, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} title={`${e.label} — ${e.sub}`}>{e.label}</div>
                  ))}
                </>}
              </div>
            );
          })}
        </div>
      </div>
      <div style={S.card}>
        <div style={S.cardTitle}>Legend</div>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[["Tasks", COLORS.blue], ["Service Requests", COLORS.orange], ["Deal Close Dates", COLORS.gold]].map(([label, color]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "2px", background: color }} />{label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportsPage({ deals, contacts, servicing }) {
  return (
    <div>
      <div style={S.statGrid}>
        <div style={S.statCard(COLORS.gold)}>
          <div style={S.statLabel}>Total Pipeline</div>
          <div style={S.statValue}>${deals.filter(d => d.stage !== "Closed Lost").reduce((s, d) => s + parseInt((d.value||"0").replace(/\D/g,"")||0), 0).toLocaleString()}</div>
          <div style={S.statSub}>{deals.length} total deals</div>
        </div>
        <div style={S.statCard(COLORS.green)}>
          <div style={S.statLabel}>Closed Won</div>
          <div style={S.statValue}>{deals.filter(d => d.stage === "Closed Won").length}</div>
          <div style={S.statSub}>Deals this period</div>
        </div>
        <div style={S.statCard(COLORS.blue)}>
          <div style={S.statLabel}>Total Clients</div>
          <div style={S.statValue}>{contacts.filter(c => c.status === "Client").length}</div>
          <div style={S.statSub}>Active accounts</div>
        </div>
        <div style={S.statCard(COLORS.orange)}>
          <div style={S.statLabel}>Open Service</div>
          <div style={S.statValue}>{servicing.filter(s => s.status !== "Complete").length}</div>
          <div style={S.statSub}>Requests pending</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={S.card}>
          <div style={S.cardTitle}>Pipeline by Stage</div>
          {["Prospecting","Quoting","Proposal","Negotiation"].map(stage => {
            const stageDeals = deals.filter(d => d.stage === stage);
            const total = stageDeals.reduce((s, d) => s + parseInt((d.value||"0").replace(/\D/g,"")||0), 0);
            return (
              <div key={stage} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "13px" }}>{stage} ({stageDeals.length})</span>
                  <span style={{ fontSize: "13px", color: COLORS.slate }}>${total.toLocaleString()}</span>
                </div>
                <div style={{ background: `${COLORS.navy}11`, borderRadius: "2px", height: "6px" }}>
                  <div style={{ background: COLORS.gold, height: "6px", borderRadius: "2px", width: `${Math.min((total/100000)*100,100)}%` }} />
                </div>
              </div>
            );
          })}
        </div>
        <div style={S.card}>
          <div style={S.cardTitle}>Open Service Requests</div>
          <table style={S.table}>
            <thead><tr><th style={S.th}>Type</th><th style={S.th}>Deal</th><th style={S.th}>Due</th><th style={S.th}>Status</th></tr></thead>
            <tbody>
              {servicing.filter(s => s.status !== "Complete").map(s => {
                const deal = deals.find(d => d.id === s.dealId);
                return (
                  <tr key={s.id}>
                    <td style={S.td}>{s.type}</td>
                    <td style={S.td}>{deal ? deal.name : "—"}</td>
                    <td style={{ ...S.td, color: COLORS.orange }}>{s.due}</td>
                    <td style={S.td}><StatusBadge status={s.status} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const NAV = [
  { section: "Overview", items: [{ id: "dashboard", label: "Dashboard", icon: "◈" }] },
  { section: "Prospecting", items: [{ id: "leads", label: "Leads", icon: "◎" }, { id: "contacts", label: "Contacts", icon: "◉" }] },
  { section: "Sales", items: [{ id: "deals", label: "Deals", icon: "◐" }, { id: "pipeline", label: "Pipeline Board", icon: "▦" }] },
  { section: "Service", items: [{ id: "servicing", label: "Servicing", icon: "◇" }, { id: "tasks", label: "Tasks", icon: "✓" }] },
  { section: "Planning", items: [{ id: "calendar", label: "Calendar", icon: "▦" }] },
  { section: "Analytics", items: [{ id: "reports", label: "Reports", icon: "◈" }] },
];

const PAGE_TITLES = { dashboard: "Dashboard", contacts: "Contacts", leads: "Leads", deals: "Deals", pipeline: "Pipeline Board", tasks: "Tasks", servicing: "Servicing", calendar: "Calendar", reports: "Reports" };

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = useAppState();

  if (!loggedIn) {
    return (
      <div style={S.loginPage}>
        <div style={S.loginBox}>
          <div style={S.loginTitle}>Commercial Insurance</div>
          <div style={S.loginSubtitle}>Producer CRM</div>
          <input style={S.input} type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
          <input style={S.input} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button style={S.loginBtn} onClick={() => setLoggedIn(true)}>Sign In</button>
        </div>
        <div style={{ color: COLORS.slate, fontSize: "12px", marginTop: "24px" }}>Enter any email & password to continue</div>
      </div>
    );
  }

  const initials = (email.split("@")[0] || "U").slice(0, 2).toUpperCase();

  return (
    <div style={S.app}>
      <div style={S.layout}>
        <aside style={S.sidebar}>
          <div style={S.sidebarLogo}>
            <span style={S.sidebarLogoText}>Commercial Insurance</span>
            <span style={S.sidebarLogoMain}>Producer CRM</span>
          </div>
          {NAV.map(section => (
            <div key={section.section} style={S.navSection}>
              <span style={S.navLabel}>{section.section}</span>
              {section.items.map(item => (
                <div key={item.id} style={S.navItem(page === item.id)} onClick={() => setPage(item.id)}>
                  <span>{item.icon}</span>{item.label}
                </div>
              ))}
            </div>
          ))}
        </aside>
        <main style={S.main}>
          <div style={S.topBar}>
            <h1 style={S.pageTitle}>{PAGE_TITLES[page]}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "13px", color: COLORS.slate }}>{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
              <div style={S.userBadge} onClick={() => setLoggedIn(false)} title="Sign out">{initials}</div>
            </div>
          </div>
          <div style={S.content}>
            {page === "dashboard" && <Dashboard tasks={state.tasks} deals={state.deals} contacts={state.contacts} servicing={state.servicing} />}
            {page === "contacts" && <ContactsPage contacts={state.contacts} setContacts={state.setContacts} />}
            {page === "leads" && <LeadsPage leads={state.leads} setLeads={state.setLeads} contacts={state.contacts} setContacts={state.setContacts} />}
            {page === "deals" && <DealsPage deals={state.deals} setDeals={state.setDeals} contacts={state.contacts} setContacts={state.setContacts} />}
            {page === "pipeline" && <PipelineBoard deals={state.deals} contacts={state.contacts} />}
            {page === "tasks" && <TasksPage tasks={state.tasks} setTasks={state.setTasks} />}
            {page === "servicing" && <ServicingPage servicing={state.servicing} setServicing={state.setServicing} deals={state.deals} contacts={state.contacts} />}
            {page === "calendar" && <CalendarPage tasks={state.tasks} servicing={state.servicing} deals={state.deals} contacts={state.contacts} />}
            {page === "reports" && <ReportsPage deals={state.deals} contacts={state.contacts} servicing={state.servicing} />}
          </div>
        </main>
      </div>
    </div>
  );
}
