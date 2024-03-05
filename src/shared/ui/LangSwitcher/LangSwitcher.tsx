import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./langSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../Button/Button";

interface langSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: langSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Мова")}
    </Button>
  );
};
