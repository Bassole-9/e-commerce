import React from "react";
import { Routes, Route } from "react-router-dom";
import { Alayout, Dashboard } from ".";
import { User, UserAdd, UserEdit } from "./user/";
import { ArticlesAdminEdit, ArticlesAdmin } from "./articles/";
import Erreur from "../erreur";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Alayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user">
          <Route path="index" element={<User />} />
          <Route path="edit/:uid" element={<UserEdit />} />
          <Route path="Add" element={<UserAdd />} />
        </Route>
        <Route path="articles">
          <Route path="index" element={<ArticlesAdmin />} />
          <Route path="edit" element={<ArticlesAdminEdit />} />
        </Route>
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  );
};
export default AdminRouter;
