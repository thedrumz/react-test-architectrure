import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import I18nProvider from "../../components/I18nProvider/I18nProvider";
import { store } from "../../store/store";

const customRender = (component) => {
  return render(
    <I18nProvider defaultLocale="en">
      <Provider store={store}>{component}</Provider>)
    </I18nProvider>
  );
};

export default customRender;
