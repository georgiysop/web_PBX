import s from "./menu.module.css";
import Nec_logo from "./logos/Nec_logo";
import Widgets from "./logos/Widgets_svg";
import Reports from "./logos/Reports_svg";
import Settings from "./logos/Settings_svg";
import Admin from "./logos/Admin_svg";
import GPT from "./logos/GPT_svg";
import Rings from "./logos/Rings_svg";
import Table from "./logos/Table_svg";
import Logout from "./logos/Logout_svg";
import logo_SFR from "./logos/sfr.png";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className={s.wrapper}>
      <img src={logo_SFR} className={s.SFR_logo} />
      <div className={s.styleMenu}>
        <ul>
          <NavLink
            to="/Widgets"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            <li className={s.item}>
              <Widgets className={s.logo} />
              Виджеты
            </li>
          </NavLink>
          <NavLink
            to="/Rings"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            <li className={s.item} id={s.item_last}>
              <Rings className={s.logo} />
              Звонки
            </li>
          </NavLink>
          <NavLink
            to="/Reports"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            <li className={s.item}>
              <Reports className={s.logo} />
              Отчеты
            </li>
          </NavLink>

          <NavLink
            to="/Admin"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            <li className={s.item}>
              <Table className={s.logo} />
              Таблицы
            </li>
          </NavLink>



          {/* <NavLink
            to="/GPT"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            <li className={s.item}>
              <GPT className={s.logo} />
              GPT
            </li>
          </NavLink> */}

          <NavLink
            to="/Logout"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            <li className={s.item}>
              <Logout className={s.logo} />
              Выйти
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
