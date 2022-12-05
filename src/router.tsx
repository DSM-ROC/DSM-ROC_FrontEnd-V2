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
import Challengers from 'pages/challenge/challengers';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<Header />}>
          {/** header 있는 페이지 */}
          <Route path="/" element={<Main />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/createChallenge" element={<CreateChallenge />} />
          <Route path="detail/:challengeId" element={<Detail />} />
          <Route path="challenge/:challengeId">
            <Route path="" element={<Challenge />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="comments" element={<Comments />} />
            <Route path="challengers" element={<Challengers />} />
            <Route path="board" element={<Board />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;