import SearchForm from "./SearchForm.js";
import { fetchLanguages } from "./api.js";
import Suggestion from "./Suggestion.js";
import SelectedLanguages from "./SelectedLanguages.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    keyword: "",
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    suggestion.setState({
      items: this.state.fetchedLanguages,
      selectedIndex: 0,
      keyword: this.state.keyword,
    });
    selectedLanguages.setState(this.state.selectedLanguages);
  };

  const selectedLanguages = new SelectedLanguages({
    $target,
    initialState: [],
    onClick: () => {},
  });

  const searchForm = new SearchForm({
    $target,
    initialState: "",
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
    initialState: { items: [], cursor: 0 },
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
      });
    },
  });
}
