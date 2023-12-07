import styles from "./topbar.module.css";

export default function TopBar() {
  return (
    <>
      <div className={`${styles.topbar} fixed top-0 z-50 border-0`}>
        <span>Acompanhe as melhores promoções disponíveis aqui na Maeztra</span>
      </div>
    </>
  );
}
