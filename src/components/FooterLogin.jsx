import { Typography } from "@material-ui/core";
import "fontsource-roboto";

const FooterLogin = () => {
  return (
    <div>
      <Typography variant="subtitle2" color="initial" align="center">
        Está ingresando a un sistema de información de propiedad de la Policía
        Nacional. Su uso no autorizado incurre en incumplimiento a las políticas
        de seguridad de la Institución y acarrea sanciones penales,
        disciplinarias o administrativas.
      </Typography>
    </div>
  );
};

export default FooterLogin;
