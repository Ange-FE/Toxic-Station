import { useTranslation } from "react-i18next"
import { LinkButton } from "components/general"
import { ExtraActions } from "components/layout"
import {useChainID } from "data/wallet"

const ContractActions = () => {
  const { t } = useTranslation()
  const chainID = useChainID()
  if (chainID  != "") {
    return (
      <ExtraActions>
        <LinkButton to="/contract/store" color="primary" size="small">
          {t("Upload")}
        </LinkButton>
        <LinkButton to="/contract/migrate" color="primary" size="small">
          {t("Migrate")}
        </LinkButton>
        <LinkButton to="/contract/execute" color="primary" size="small">
          {t("Execute")}
        </LinkButton>
        <LinkButton to="/contract/instantiate" color="primary" size="small">
          {t("Instantiate")}
        </LinkButton>
      </ExtraActions>
    )
  } else {
    return (
      <ExtraActions>
        <LinkButton to="/contract/store" color="primary" size="small">
          {t("Upload")}
        </LinkButton>

        <LinkButton to="/contract/instantiate" color="primary" size="small">
          {t("Instantiate")}
        </LinkButton>
      </ExtraActions>
    )
  }
}

export default ContractActions
