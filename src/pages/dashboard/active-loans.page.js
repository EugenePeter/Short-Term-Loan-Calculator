import React, { useContext, useState, Fragment, useEffect } from "react";
import {
  useParams,
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import { useImmerReducer, useImmer } from "use-immer";

import StateContext from "../../context/StateContext";

import Axios from "axios";

import {
  UpcomingPaymentsTitle,
  CircleIcon,
  Modifiers,
} from "./active-loans.styles";

import {
  StyledNavLink,
  NavLinkContainer,
  GlobalStyle,
} from "../../components/nav-link/nav-link.styles";

import List from "../../components/dashboard-component/list.component";

import {} from "../../global-styles/global.styles";

import LoanIndicator from "../../components/loan-indicator/loan-indicator.component";

import LoadingIcon from "../../global-styles/Loading-icons.component";

function ActiveLoans(props) {
  const { username } = useParams();

  const appState = useContext(StateContext);
  const [posts, setPosts] = useState([]);
  const [state, setState] = useImmer({
    accountDetails: "",
    sched: "sss",
    runDateFunction: false,
    isFetchingData: true,
    isFetchinDate: true,
    repaymentDates: "",
  });

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();

    async function fetchPosts() {
      try {
        const response = await Axios.get(
          `http://localhost:8080/profile/${username}/posts`,
          {
            cancelToken: ourRequest.token,
          }
        );
        // setPosts(response.data);
        console.log(response.data);
        setState((draft) => {
          draft.accountDetails = response.data;
          draft.isFetchingData = !draft.isFetchingData;
        });
      } catch (e) {
        console.log(e + "There was a problem.");
      }
    }
    fetchPosts();
    return () => {
      ourRequest.cancel();
    };
  }, []);

  // const loanAmount = ((posts || {}).loanDetails || {}).loanAmount;

  const loanDetails = (state.accountDetails || {}).loanDetails || {};

  const { loanAmount, loanDuration, loanRepayment, loanSchedule } = loanDetails;

  useEffect(() => {
    if (!state.isFetchingData) {
      if (loanSchedule == "Month") {
        setState((draft) => {
          draft.sched = 30;
          draft.runDateFunction = true;
        });
      }

      if (loanSchedule == "Week") {
        setState((draft) => {
          draft.sched = 7;
          draft.runDateFunction = true;
        });
      }

      if (loanSchedule == "Fornight") {
        setState((draft) => {
          draft.sched = 14;
          draft.runDateFunction = true;
        });
      }
    }
  }, [state.isFetchingData]);

  let dd = [];

  useEffect(() => {
    if (state.runDateFunction) {
      const approvalDate = state.accountDetails.createdDate;
      var date = new Date(approvalDate);
      // console.log(date);

      var next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      var days = ["sun", "mon", "tues", "wed", "thus", "fri", "sat"];
      var months = [
        "jan",
        "febr",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ];
      const getDate = async () => {
        try {
          function format(d) {
            return (
              d.getDate() + " " + days[d.getDay()] + ", " + months[d.getMonth()]
            );
          }

          function formatDate(d) {
            return d.getDate();
          }

          function formatDay(d) {
            return days[d.getDay()];
          }

          function formatMonth(d) {
            return months[d.getMonth()];
          }

          // console.log("Starting day is " + format(date));

          async function dateLoop() {
            for (let i = 0; i < loanDuration; i++) {
              next = new Date(
                next.getFullYear(),
                next.getMonth(),
                next.getDate() + state.sched
              );
              // console.log("Next week is " + format(next));

              // var getDate = await Array(1)
              //   .fill()
              //   .map((x) => ({
              //     day: formatDate(next),
              //     date: formatDay(next),
              //     month: formatMonth(next),
              //   }));

              let date = {
                id: i,
                day: formatDay(next),
                date: formatDate(next),
                month: formatMonth(next),
              };

              await dd.push(date);

              // let final = await Object.assign({}, getDate);
              // await dd.push(getDate);
              // console.log(final);

              // dd.flat();
            }
          }

          await dateLoop();
          // const merge = await dd.flat(1);
          var merged = [].concat.apply([], dd);
          // console.dir(merged);
          // let final = await Object.assign({}, merge);

          setState((draft) => {
            draft.isFetchinDate = false;
            draft.repaymentDates = merged;
          });
        } catch (e) {
          console.log(e);
        }
      };
      getDate();
    }
  }, [state.runDateFunction]);

  useEffect(() => {
    // Object.assign({}, state.repaymentDates);
  }, [state.isFetchingDate]);

  return (
    <Fragment>
      <Modifiers />
      <LoanIndicator />
      <UpcomingPaymentsTitle className="padding-l-1 margin-b">
        Upcoming Payments{" "}
        <CircleIcon className="margin-l-10">
          <small> {loanDuration}</small>
        </CircleIcon>{" "}
      </UpcomingPaymentsTitle>
      {!state.isFetchingDate &&
        state.repaymentDates.length > 0 &&
        state.repaymentDates.map((post) => {
          return (
            <List
              key={post.id}
              details={post}
              repaymentAmount={loanRepayment}
            />
          );
        })}
      {state.isFetchingDate ? <LoadingIcon /> : ""}

      {!state.repaymentDates ? <h1>test</h1> : <h1>now</h1>}
    </Fragment>
  );
}
export default withRouter(ActiveLoans);
