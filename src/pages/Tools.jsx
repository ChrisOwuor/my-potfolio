const groups=[
 {title:"AI & Automation",text:"Building and evaluating practical intelligent workflows.",items:["Model fine-tuning","AI agents","Output evaluation","Prompt engineering","Automation"]},
 {title:"Cloud & Systems",text:"Operating secure and observable infrastructure.",items:["AWS","Azure","Oracle Cloud","Linux","Windows Server","RBAC"]},
 {title:"Networks & Support",text:"Diagnosing service issues from endpoint to network core.",items:["DNS","DHCP","TCP/IP","WAN/LAN","Routing & switching","Firewalls","SolarWinds"]},
 {title:"Backend & Data",text:"Developing reliable services and data layers.",items:["Java","Spring Boot","PostgreSQL","SQL","Bash","PowerShell","REST APIs"]},
 {title:"Observability",text:"Turning system signals into useful operational insight.",items:["Prometheus","Grafana","Incident logs","Root cause analysis","SLA reporting"]},
 {title:"Certifications",text:"Industry credentials supporting hands-on experience.",items:["AWS Cloud Practitioner","CCNA","Cisco AI Technical Practitioner","KCNA"]}
];
export default function Tools(){return <main><section className="page-hero"><div className="container"><p className="eyebrow">Technical profile</p><h1 className="page-title">Tools chosen for reliability, not novelty.</h1><p className="lead">A broad systems toolkit grounded in production support, secure backend development, and applied AI.</p></div></section><section className="section"><div className="container skill-groups">{groups.map(g=><article className="skill-card card" key={g.title}><h2>{g.title}</h2><p>{g.text}</p><div className="tags">{g.items.map(i=><span className="tag" key={i}>{i}</span>)}</div></article>)}</div></section></main>}
