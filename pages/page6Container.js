import { connect } from 'react-redux';
import { setBudget } from '../actions';
import Page6 from '../components/Page6';

const mapStateToProps = (state) => {
  return {
    budget: state.budget,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBudget: (budget) => {
      dispatch(setBudget(budget));
    },
  };
};

const Page6Container = connect(mapStateToProps, mapDispatchToProps)(Page6);

export default Page6Container;
