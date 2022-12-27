import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from 'components/common/header/header';
import NotFound from 'pages/status/notFound';
import Main from 'pages/main';
import Login from 'pages/login';
import SignUp from 'pages/signUp';
import MyPage from 'pages/myPage';
import CreateChallenge from 'pages/createChallenge';
import Detail from 'pages/detail/detail';
import Challenge from 'pages/challenge/challenge';
import Calendar from 'pages/challenge/calendar';
import Comments from 'pages/challenge/comments';
import Board from 'pages/challenge/board';
import CreateBoard from 'pages/challenge/createBoard';
import Challengers from 'pages/challenge/challengers';
import Footer from 'components/common/footer/footer';
import AllChallenge from 'pages/allChallenge';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="challenge/:challengeId">
            <Route path="board" element={<Board />} />
            <Route path="createBoard" element={<CreateBoard />} />
          </Route>
          <Route element={<Footer />}>
            <Route path="/" element={<Main />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/createChallenge" element={<CreateChallenge />} />
            <Route path="/detail/:challengeId" element={<Detail />} />
            <Route path="/challenges" element={<AllChallenge />} />
            <Route path="/challenge">
              <Route path=":challengeId">
                <Route path="" element={<Challenge />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="comments" element={<Comments />} />
                <Route path="challengers" element={<Challengers />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
