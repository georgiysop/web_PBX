// Filename - Form.js
import s from "../Report.module.css";
export default function Report_2() {
  return (
    <div className={s.wrapper}>
      <h2>Отчеты оператора</h2>
      <button>Загрузить</button>
      <hr style={{ marginTop: 40, marginBottom: 40 }} />
    </div>
  );
}
