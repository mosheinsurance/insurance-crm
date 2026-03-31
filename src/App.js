import { useState } from "react";

const COLORS = {
  navy: "#0A1628",
  navyLight: "#112240",
  gold: "#C9A84C",
  goldLight: "#E8C97A",
  cream: "#F5F0E8",
  white: "#FFFFFF",
  slate: "#8892A4",
  slateLight: "#A8B2C4",
  green: "#2ECC71",
  red: "#E74C3C",
  blue: "#3498DB",
  orange: "#E67E22",
};

const styles = {
  app: {
    fontFamily: "'Georgia', serif",
    background: COLORS.cream,
    minHeight: "100vh",
    color: COLORS.navy,
  },
  // LOGIN
  loginPage: {
    minHeight: "100vh",
    background: COLORS.navy,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  loginBox: {
    background: COLORS.navyLight,
    border: `1px solid ${COLORS.gold}44`,
    borderRadius: "4px",
    padding: "48px",
    width: "100%",
    maxWidth: "400px",
  },
  loginTitle: {
    color: COLORS.gold,
    fontSize: "11px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: "8px",
    fontFamily: "'Georgia', serif",
  },
  loginSubtitle: {
    color: COLORS.white,
    fontSize: "26px",
    textAlign: "center",
    marginBottom: "36px",
    fontWeight: "normal",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    background: COLORS.navy,
    border: `1px solid ${COLORS.gold}44`,
    borderRadius: "4px",
    color: COLORS.white,
    fontSize: "15px",
    marginBottom: "16px",
    boxSizing: "border-box",
    fontFamily: "'Georgia', serif",
    outline: "none",
  },
  loginBtn: {
    width: "100%",
    padding: "14px",
    background: COLORS.gold,
    border: "none",
    borderRadius: "4px",
    color: COLORS.navy,
    fontSize: "13px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "'Georgia', serif",
    fontWeight: "bold",
    marginTop: "8px",
  },
  // LAYOUT
  layout: {
    display: "flex",
    minHeight: "100vh",
  },
  sidebar: {
    width: "240px",
    background: COLORS.navy,
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    overflowY: "auto",
  },
  sidebarLogo: {
    padding: "28px 24px 20px",
    borderBottom: `1px solid ${COLORS.gold}33`,
  },
  sidebarLogoText: {
    color: COLORS.gold,
    fontSize: "10px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "4px",
  },
  sidebarLogoMain: {
    color: COLORS.white,
    fontSize: "18px",
    fontWeight: "normal",
  },
  navSection: {
    padding: "20px 0",
    borderBottom: `1px solid ${COLORS.gold}22`,
  },
  navLabel: {
    color: COLORS.slate,
    fontSize: "9px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    padding: "0 24px 8px",
    display: "block",
  },
  navItem: (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 24px",
    color: active ? COLORS.gold : COLORS.slateLight,
    background: active ? `${COLORS.gold}11` : "transparent",
    borderLeft: active ? `2px solid ${COLORS.gold}` : "2px solid transparent",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.15s",
    userSelect: "none",
  }),
  main: {
    marginLeft: "240px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  topBar: {
    background: COLORS.white,
    borderBottom: `1px solid ${COLORS.navy}11`,
    padding: "16px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  pageTitle: {
    fontSize: "20px",
    color: COLORS.navy,
    fontWeight: "normal",
  },
  userBadge: {
    background: COLORS.navy,
    color: COLORS.gold,
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    cursor: "pointer",
  },
  content: {
    padding: "32px",
    flex: 1,
  },
  // CARDS
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "32px",
  },
  statCard: (color) => ({
    background: COLORS.white,
    border: `1px solid ${COLORS.navy}11`,
    borderTop: `3px solid ${color}`,
    borderRadius: "4px",
    padding: "20px 24px",
  }),
  statLabel: {
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: COLORS.slate,
    marginBottom: "8px",
  },
  statValue: {
    fontSize: "28px",
    color: COLORS.navy,
    fontWeight: "normal",
  },
  statSub: {
    fontSize: "12px",
    color: COLORS.slate,
    marginTop: "4px",
  },
  card: {
    background: COLORS.white,
    border: `1px solid ${COLORS.navy}11`,
    borderRadius: "4px",
    padding: "24px",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: COLORS.gold,
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  th: {
    textAlign: "left",
    padding: "8px 12px",
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: COLORS.slate,
    borderBottom: `1px solid ${COLORS.navy}11`,
  },
  td: {
    padding: "12px",
    borderBottom: `1px solid ${COLORS.navy}08`,
    color: COLORS.navy,
    verticalAlign: "middle",
  },
  badge: (color, bg) => ({
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: "2px",
    fontSize: "11px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: color,
    background: bg,
  }),
  btn: {
    padding: "10px 20px",
    background: COLORS.gold,
    border: "none",
    borderRadius: "4px",
    color: COLORS.navy,
    fontSize: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "'Georgia', serif",
    fontWeight: "bold",
  },
  btnOutline: {
    padding: "10px 20px",
    background: "transparent",
    border: `1px solid ${COLORS.navy}33`,
    borderRadius: "4px",
    color: COLORS.navy,
    fontSize: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "'Georgia', serif",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "16px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: COLORS.slate,
  },
  formInput: {
    padding: "10px 14px",
    border: `1px solid ${COLORS.navy}22`,
    borderRadius: "4px",
    fontSize: "14px",
    fontFamily: "'Georgia', serif",
    color: COLORS.navy,
    background: COLORS.cream,
    outline: "none",
  },
  formSelect: {
    padding: "10px 14px",
    border: `1px solid ${COLORS.navy}22`,
    borderRadius: "4px",
    fontSize: "14px",
    fontFamily: "'Georgia', serif",
    color: COLORS.navy,
    background: COLORS.cream,
    outline: "none",
  },
};

// ── SAMPLE DATA ──────────────────────────────────────────────────────────────
const sampleContacts = [
  { id: 1, name: "Robert Kline", company: "Kline Manufacturing", phone: "(212) 555-0182", email: "rkline@klinemfg.com", status: "Hot Lead", lastContact: "Mar 28" },
  { id: 2, name: "Sandra Okafor", company: "Okafor Logistics", phone: "(646) 555-0341", email: "sokafor@okaforlog.com", status: "Client", lastContact: "Mar 25" },
  { id: 3, name: "James Whitfield", company: "Whitfield Realty Group", phone: "(718) 555-0293", email: "jwhitfield@wrgny.com", status: "Prospect", lastContact: "Mar 20" },
  { id: 4, name: "Maria Delgado", company: "Delgado Construction", phone: "(917) 555-0167", email: "mdelgado@delgadoco.com", status: "Hot Lead", lastContact: "Mar 29" },
  { id: 5, name: "Thomas Brennan", company: "Brennan & Associates", phone: "(212) 555-0448", email: "tbrennan@brennanassoc.com", status: "Client", lastContact: "Mar 15" },
];

const sampleDeals = [
  { id: 1, name: "Kline Mfg — BOP Policy", contact: "Robert Kline", value: "$42,000", stage: "Proposal", close: "Apr 15" },
  { id: 2, name: "Delgado — Workers Comp", contact: "Maria Delgado", value: "$28,500", stage: "Quoting", close: "Apr 30" },
  { id: 3, name: "Whitfield — Property", contact: "James Whitfield", value: "$67,000", stage: "Prospecting", close: "May 20" },
  { id: 4, name: "Brennan — Umbrella", contact: "Thomas Brennan", value: "$15,000", stage: "Closed Won", close: "Mar 10" },
];

const sampleTasks = [
  { id: 1, task: "Follow up — Kline quote", contact: "Robert Kline", due: "Today", priority: "High" },
  { id: 2, task: "Send renewal docs", contact: "Sandra Okafor", due: "Apr 2", priority: "High" },
  { id: 3, task: "Schedule meeting", contact: "James Whitfield", due: "Apr 5", priority: "Medium" },
  { id: 4, task: "Request loss runs", contact: "Maria Delgado", due: "Apr 3", priority: "Medium" },
];

// ── STATUS BADGE ─────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    "Hot Lead":   [COLORS.red,    "#FDECEA"],
    "Client":     [COLORS.green,  "#E8F8F0"],
    "Prospect":   [COLORS.blue,   "#EAF4FB"],
    "Closed Won": [COLORS.green,  "#E8F8F0"],
    "Proposal":   [COLORS.orange, "#FEF5EC"],
    "Quoting":    [COLORS.blue,   "#EAF4FB"],
    "Prospecting":[COLORS.slate,  "#F0F2F5"],
    "High":       [COLORS.red,    "#FDECEA"],
    "Medium":     [COLORS.orange, "#FEF5EC"],
    "Low":        [COLORS.slate,  "#F0F2F5"],
  };
  const [color, bg] = map[status] || [COLORS.slate, "#F0F2F5"];
  return <span style={styles.badge(color, bg)}>{status}</span>;
}

// ── DASHBOARD ─────────────────────────────────────────────────────────────────
function Dashboard() {
  return (
    <div>
      <div style={styles.statGrid}>
        <div style={styles.statCard(COLORS.gold)}>
          <div style={styles.statLabel}>Active Clients</div>
          <div style={styles.statValue}>24</div>
          <div style={styles.statSub}>+3 this month</div>
        </div>
        <div style={styles.statCard(COLORS.red)}>
          <div style={styles.statLabel}>Hot Leads</div>
          <div style={styles.statValue}>8</div>
          <div style={styles.statSub}>Needs attention</div>
        </div>
        <div style={styles.statCard(COLORS.blue)}>
          <div style={styles.statLabel}>Pipeline Value</div>
          <div style={styles.statValue}>$412K</div>
          <div style={styles.statSub}>Across 12 deals</div>
        </div>
        <div style={styles.statCard(COLORS.green)}>
          <div style={styles.statLabel}>Renewals Due</div>
          <div style={styles.statValue}>5</div>
          <div style={styles.statSub}>Next 30 days</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Tasks Due Soon</div>
          {sampleTasks.map(t => (
            <div key={t.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${COLORS.navy}08` }}>
              <div>
                <div style={{ fontSize: "14px", marginBottom: "2px" }}>{t.task}</div>
                <div style={{ fontSize: "12px", color: COLORS.slate }}>{t.contact}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <StatusBadge status={t.priority} />
                <div style={{ fontSize: "11px", color: COLORS.slate, marginTop: "4px" }}>{t.due}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>Recent Deals</div>
          {sampleDeals.map(d => (
            <div key={d.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${COLORS.navy}08` }}>
              <div>
                <div style={{ fontSize: "14px", marginBottom: "2px" }}>{d.name}</div>
                <div style={{ fontSize: "12px", color: COLORS.slate }}>{d.contact}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "15px", color: COLORS.navy }}>{d.value}</div>
                <StatusBadge status={d.stage} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CONTACTS ──────────────────────────────────────────────────────────────────
function Contacts() {
  const [contacts, setContacts] = useState(sampleContacts);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", status: "Prospect" });

  function handleAdd() {
    if (!form.name) return;
    setContacts([...contacts, { ...form, id: Date.now(), lastContact: "Today" }]);
    setForm({ name: "", company: "", phone: "", email: "", status: "Prospect" });
    setShowForm(false);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ fontSize: "13px", color: COLORS.slate }}>{contacts.length} contacts</div>
        <button style={styles.btn} onClick={() => setShowForm(!showForm)}>+ Add Contact</button>
      </div>

      {showForm && (
        <div style={{ ...styles.card, borderTop: `3px solid ${COLORS.gold}` }}>
          <div style={styles.cardTitle}>New Contact</div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input style={styles.formInput} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Company</label>
              <input style={styles.formInput} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="ABC Corp" />
            </div>
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone</label>
              <input style={styles.formInput} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(212) 555-0000" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input style={styles.formInput} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@abc.com" />
            </div>
          </div>
          <div style={{ ...styles.formGroup, marginBottom: "20px" }}>
            <label style={styles.label}>Status</label>
            <select style={styles.formSelect} value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
              <option>Prospect</option>
              <option>Hot Lead</option>
              <option>Client</option>
            </select>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={styles.btn} onClick={handleAdd}>Save Contact</button>
            <button style={styles.btnOutline} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Company</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Last Contact</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id}>
                <td style={styles.td}><strong>{c.name}</strong></td>
                <td style={styles.td}>{c.company}</td>
                <td style={styles.td}>{c.phone}</td>
                <td style={{ ...styles.td, color: COLORS.blue }}>{c.email}</td>
                <td style={styles.td}><StatusBadge status={c.status} /></td>
                <td style={{ ...styles.td, color: COLORS.slate }}>{c.lastContact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── PIPELINE ──────────────────────────────────────────────────────────────────
const STAGES = ["Prospecting", "Quoting", "Proposal", "Negotiation", "Closed Won"];

function Pipeline() {
  const [deals, setDeals] = useState(sampleDeals);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", value: "", stage: "Prospecting", close: "" });

  function handleAdd() {
    if (!form.name) return;
    setDeals([...deals, { ...form, id: Date.now() }]);
    setForm({ name: "", contact: "", value: "", stage: "Prospecting", close: "" });
    setShowForm(false);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ fontSize: "13px", color: COLORS.slate }}>{deals.length} deals in pipeline</div>
        <button style={styles.btn} onClick={() => setShowForm(!showForm)}>+ Add Deal</button>
      </div>

      {showForm && (
        <div style={{ ...styles.card, borderTop: `3px solid ${COLORS.gold}` }}>
          <div style={styles.cardTitle}>New Deal</div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Deal Name</label>
              <input style={styles.formInput} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="ABC Corp — BOP Policy" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact</label>
              <input style={styles.formInput} value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="John Smith" />
            </div>
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Premium Value</label>
              <input style={styles.formInput} value={form.value} onChange={e => setForm({ ...form, value: e.target.value })} placeholder="$25,000" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Expected Close</label>
              <input style={styles.formInput} type="date" value={form.close} onChange={e => setForm({ ...form, close: e.target.value })} />
            </div>
          </div>
          <div style={{ ...styles.formGroup, marginBottom: "20px" }}>
            <label style={styles.label}>Stage</label>
            <select style={styles.formSelect} value={form.stage} onChange={e => setForm({ ...form, stage: e.target.value })}>
              {STAGES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={styles.btn} onClick={handleAdd}>Save Deal</button>
            <button style={styles.btnOutline} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
        {STAGES.map(stage => (
          <div key={stage} style={{ background: COLORS.white, border: `1px solid ${COLORS.navy}11`, borderRadius: "4px", padding: "16px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: COLORS.slate, marginBottom: "12px" }}>{stage}</div>
            {deals.filter(d => d.stage === stage).map(d => (
              <div key={d.id} style={{ background: COLORS.cream, border: `1px solid ${COLORS.navy}11`, borderRadius: "4px", padding: "12px", marginBottom: "8px" }}>
                <div style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "4px" }}>{d.name}</div>
                <div style={{ fontSize: "12px", color: COLORS.slate, marginBottom: "6px" }}>{d.contact}</div>
                <div style={{ fontSize: "15px", color: COLORS.navy }}>{d.value}</div>
                {d.close && <div style={{ fontSize: "11px", color: COLORS.slate, marginTop: "4px" }}>Close: {d.close}</div>}
              </div>
            ))}
            {deals.filter(d => d.stage === stage).length === 0 && (
              <div style={{ fontSize: "12px", color: COLORS.slateLight, textAlign: "center", padding: "20px 0" }}>No deals</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── TASKS ─────────────────────────────────────────────────────────────────────
function Tasks() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ task: "", contact: "", due: "", priority: "Medium" });
  const [done, setDone] = useState([]);

  function handleAdd() {
    if (!form.task) return;
    setTasks([...tasks, { ...form, id: Date.now() }]);
    setForm({ task: "", contact: "", due: "", priority: "Medium" });
    setShowForm(false);
  }

  function toggleDone(id) {
    setDone(done.includes(id) ? done.filter(d => d !== id) : [...done, id]);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ fontSize: "13px", color: COLORS.slate }}>{tasks.length - done.length} tasks remaining</div>
        <button style={styles.btn} onClick={() => setShowForm(!showForm)}>+ Add Task</button>
      </div>

      {showForm && (
        <div style={{ ...styles.card, borderTop: `3px solid ${COLORS.gold}` }}>
          <div style={styles.cardTitle}>New Task</div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Task</label>
              <input style={styles.formInput} value={form.task} onChange={e => setForm({ ...form, task: e.target.value })} placeholder="Follow up on quote" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact</label>
              <input style={styles.formInput} value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="John Smith" />
            </div>
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Due Date</label>
              <input style={styles.formInput} type="date" value={form.due} onChange={e => setForm({ ...form, due: e.target.value })} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Priority</label>
              <select style={styles.formSelect} value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value })}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={styles.btn} onClick={handleAdd}>Save Task</button>
            <button style={styles.btnOutline} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Done</th>
              <th style={styles.th}>Task</th>
              <th style={styles.th}>Contact</th>
              <th style={styles.th}>Due</th>
              <th style={styles.th}>Priority</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(t => (
              <tr key={t.id} style={{ opacity: done.includes(t.id) ? 0.4 : 1 }}>
                <td style={styles.td}>
                  <input type="checkbox" checked={done.includes(t.id)} onChange={() => toggleDone(t.id)} style={{ cursor: "pointer", width: "16px", height: "16px" }} />
                </td>
                <td style={{ ...styles.td, textDecoration: done.includes(t.id) ? "line-through" : "none" }}>{t.task}</td>
                <td style={styles.td}>{t.contact}</td>
                <td style={{ ...styles.td, color: t.due === "Today" ? COLORS.red : COLORS.slate }}>{t.due}</td>
                <td style={styles.td}><StatusBadge status={t.priority} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── REPORTS ───────────────────────────────────────────────────────────────────
function Reports() {
  return (
    <div>
      <div style={styles.statGrid}>
        <div style={styles.statCard(COLORS.gold)}>
          <div style={styles.statLabel}>YTD Premium Written</div>
          <div style={styles.statValue}>$1.24M</div>
          <div style={styles.statSub}>+18% vs last year</div>
        </div>
        <div style={styles.statCard(COLORS.green)}>
          <div style={styles.statLabel}>Policies in Force</div>
          <div style={styles.statValue}>87</div>
          <div style={styles.statSub}>Across 24 clients</div>
        </div>
        <div style={styles.statCard(COLORS.blue)}>
          <div style={styles.statLabel}>Avg Policy Size</div>
          <div style={styles.statValue}>$14,250</div>
          <div style={styles.statSub}>Up from $11,800</div>
        </div>
        <div style={styles.statCard(COLORS.orange)}>
          <div style={styles.statLabel}>Retention Rate</div>
          <div style={styles.statValue}>91%</div>
          <div style={styles.statSub}>Industry avg: 84%</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Pipeline by Stage</div>
          {[
            { stage: "Prospecting", value: "$67,000", pct: 40 },
            { stage: "Quoting", value: "$28,500", pct: 25 },
            { stage: "Proposal", value: "$42,000", pct: 30 },
            { stage: "Negotiation", value: "$8,000", pct: 10 },
          ].map(r => (
            <div key={r.stage} style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontSize: "13px" }}>{r.stage}</span>
                <span style={{ fontSize: "13px", color: COLORS.slate }}>{r.value}</span>
              </div>
              <div style={{ background: `${COLORS.navy}11`, borderRadius: "2px", height: "6px" }}>
                <div style={{ background: COLORS.gold, height: "6px", borderRadius: "2px", width: `${r.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>Renewals — Next 90 Days</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Client</th>
                <th style={styles.th}>Policy</th>
                <th style={styles.th}>Premium</th>
                <th style={styles.th}>Renewal</th>
              </tr>
            </thead>
            <tbody>
              {[
                { client: "Sandra Okafor", policy: "GL + Property", premium: "$38,000", date: "Apr 15" },
                { client: "Thomas Brennan", policy: "Umbrella", premium: "$15,000", date: "Apr 28" },
                { client: "ABC Plumbing", policy: "Workers Comp", premium: "$22,500", date: "May 10" },
                { client: "Metro Diner Group", policy: "BOP", premium: "$19,800", date: "May 30" },
                { client: "Park Ave Realty", policy: "Property", premium: "$54,000", date: "Jun 5" },
              ].map((r, i) => (
                <tr key={i}>
                  <td style={styles.td}>{r.client}</td>
                  <td style={styles.td}>{r.policy}</td>
                  <td style={styles.td}>{r.premium}</td>
                  <td style={{ ...styles.td, color: COLORS.orange }}>{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ── NAV CONFIG ────────────────────────────────────────────────────────────────
const NAV = [
  { section: "Overview", items: [{ id: "dashboard", label: "Dashboard", icon: "◈" }] },
  { section: "Prospecting", items: [{ id: "contacts", label: "Contacts", icon: "◉" }, { id: "tasks", label: "Tasks", icon: "◎" }] },
  { section: "Sales", items: [{ id: "pipeline", label: "Pipeline", icon: "◐" }] },
  { section: "Analytics", items: [{ id: "reports", label: "Reports", icon: "◇" }] },
];

const PAGE_TITLES = { dashboard: "Dashboard", contacts: "Contacts", tasks: "Tasks", pipeline: "Pipeline", reports: "Reports" };

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!loggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginBox}>
          <div style={styles.loginTitle}>Commercial Insurance</div>
          <div style={styles.loginSubtitle}>Producer CRM</div>
          <input style={styles.input} type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
          <input style={styles.input} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button style={styles.loginBtn} onClick={() => setLoggedIn(true)}>Sign In</button>
        </div>
        <div style={{ color: COLORS.slate, fontSize: "12px", marginTop: "24px", letterSpacing: "1px" }}>
          Enter any email & password to continue
        </div>
      </div>
    );
  }

  const initials = (email.split("@")[0] || "U").slice(0, 2).toUpperCase();

  return (
    <div style={styles.app}>
      <div style={styles.layout}>
        <aside style={styles.sidebar}>
          <div style={styles.sidebarLogo}>
            <span style={styles.sidebarLogoText}>Commercial Insurance</span>
            <span style={styles.sidebarLogoMain}>Producer CRM</span>
          </div>
          {NAV.map(section => (
            <div key={section.section} style={styles.navSection}>
              <span style={styles.navLabel}>{section.section}</span>
              {section.items.map(item => (
                <div key={item.id} style={styles.navItem(page === item.id)} onClick={() => setPage(item.id)}>
                  <span style={{ fontSize: "16px" }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          ))}
        </aside>

        <main style={styles.main}>
          <div style={styles.topBar}>
            <h1 style={styles.pageTitle}>{PAGE_TITLES[page]}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "13px", color: COLORS.slate }}>{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
              <div style={styles.userBadge} onClick={() => setLoggedIn(false)} title="Sign out">{initials}</div>
            </div>
          </div>
          <div style={styles.content}>
            {page === "dashboard" && <Dashboard />}
            {page === "contacts" && <Contacts />}
            {page === "pipeline" && <Pipeline />}
            {page === "tasks" && <Tasks />}
            {page === "reports" && <Reports />}
          </div>
        </main>
      </div>
    </div>
  );
}
