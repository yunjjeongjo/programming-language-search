import SearchForm from "./SearchForm.js";
import { fetchLanguages } from "../util/api.js";
import Suggestion from "./Suggestion.js";
import SelectedLanguages from "./SelectedLanguages.js";
import { setItem, getItem } from "../util/storage.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    keyword: "",
    cursor: 0,
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    searchForm.setState(this.state.keyword);
    suggestion.setState({
      items: this.state.fetchedLanguages,
      selectedIndex: this.state.cursor,
      keyword: this.state.keyword,
    });
    selectedLanguages.setState(this.state.selectedLanguages);
    setItem("lastState", this.state);
  };

  const selectedLanguages = new SelectedLanguages({
    $target,
    initialState: [],
    onClick: () => {},
  });

  const searchForm = new SearchForm({
    $target,
    initialState: this.state.keyword,
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({ fetchedLanguages: [], keyword: "" });
      } else {
        const languages = await fetchLanguages(keyword);
        this.setState({ fetchedLanguages: languages, keyword: keyword });
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: { items: [], cursor: this.state.cursor },
    onSelect: (language) => {
      alert(language);

      const nextSelectedLanguages = [...this.state.selectedLanguages];
      const index = nextSelectedLanguages.findIndex(
        (selectedLanguage) => selectedLanguage === language
      );

      if (index > -1) {
        nextSelectedLanguages.splice(index, 1);
      }
      nextSelectedLanguages.push(language);
      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages,
        cursor: selectedIndex,
      });
    },
  });

  if (getItem("lastState") !== null) {
    const lastState = getItem("lastState");

    this.setState({
      selectedLanguages: lastState.selectedLanguages,
      keyword: lastState.keyword,
      fetchedLanguages: lastState.fetchedLanguages,
      cursor: lastState.cursor,
    });
  }
}
