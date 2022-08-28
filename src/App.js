import SearchForm from "./SearchForm.js";
import { fetchLanguages } from "./api.js";
import Suggestion from "./Suggestion.js";
import SelectedLanguages from "./SelectedLanguages.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguges: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    suggestion.setState(this.state.fetchedLanguages);
    selectedLanguages.setState(this.state.selectedLanguges);
  };

  const selectedLanguages = new SelectedLanguages({
    $target,
    initialState: this.state.selectedLanguges,
    onClick: () => {},
  });

  const searchForm = new SearchForm({
    $target,
    initialState: "",
    onChange: async (keyword) => {
      try {
        if (keyword) {
          const data = await fetchLanguages(keyword);
          this.setState({ ...this.state, fetchedLanguages: data });
        } else {
          this.setState({ ...this.state, fetchedLanguages: [] });
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: this.state.fetchedLanguages,
    onClick: (value) => {
      if (
        this.state.selectedLanguges.filter((language) => language === value)
      ) {
        this.setState({
          ...this.state,
          selectedLanguges: [
            ...this.state.selectedLanguges.filter(
              (language) => language !== value
            ),
            value,
          ],
        });
      } else {
        if (this.state.selectedLanguges.length === 5) {
          const slicedList = this.state.selectedLanguges.splice(1, 5);
          this.setState({
            ...this.state,
            selectedLanguges: [...slicedList, value],
          });
        } else {
          this.setState({
            ...this.state,
            selectedLanguges: [...this.state.selectedLanguges, value],
          });
        }
      }
    },
  });
}
