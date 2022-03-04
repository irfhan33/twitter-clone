import "./sidebarmenu.css";
export default function SidebarMenu({ Icon, title }) {
  return (
    <div className="sidebarmenu">
      <div className="icon_container">
        <Icon className="icon" />
        <h1>{title}</h1>
      </div>
    </div>
  );
}
