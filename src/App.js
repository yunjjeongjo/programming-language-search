import SearchForm from "./SearchForm.js";
import { fetchLanguages } from "./api.js";
import Suggestion from "./Suggestion.js";
import SelectedLanguages from "./SelectedLanguages.js";

export default function App({ $target }) {
  this.state = {
    results: [],
    selectedList: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    suggestion.setState(this.state.results);
    selectedLanguage.setState(this.state.selectedList);
  };

  const selectedLanguage = new SelectedLanguages({
    $target,
    initialState: this.state.selectedList,
    onClick: () => {},
  });

  const searchForm = new SearchForm({
    $target,
    onChange: async (text) => {
      try {
        if (text) {
          const data = await fetchLanguages(text);
          this.setState({ ...this.state, results: data });
        } else {
          this.setState({ ...this.state, results: [] });
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: this.state.results,
    onClick: (value) => {
      if (this.state.selectedList.filter((language) => language === value)) {
        this.setState({
          ...this.state,
          selectedList: [
            ...this.state.selectedList.filter((language) => language !== value),
            value,
          ],
        });
      } else {
        if (this.state.selectedList.length === 5) {
          const slicedList = this.state.selectedList.splice(1, 5);
          this.setState({
            ...this.state,
            selectedList: [...slicedList, value],
          });
        } else {
          this.setState({
            ...this.state,
            selectedList: [...this.state.selectedList, value],
          });
        }
      }
    },
  });
}
