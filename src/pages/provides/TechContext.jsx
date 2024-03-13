import React, { createContext, useContext, useState } from "react";
import { userApi } from "../../services/api";
import { ExampleContext } from "./UserContext";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const { user, setUser } = useContext(ExampleContext);
  const [tech, setTech] = useState(user.techs);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [techId, setTechId] = useState({});

  const addTech = async (formValue) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await userApi.post("/users/techs", formValue, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTech([...tech, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTech = async (techId) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await userApi.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTech(
        tech.filter((tecnologies) => {
          return tecnologies.id !== techId;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const editingTech = async (formValue) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await userApi.put(`/users/techs/${techId}`, formValue, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = [...tech];
      const index = newTechs.findIndex((tecnology) => tecnology.id == data.id);
      newTechs.splice(index, 1, data);

      setTech(newTechs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        open,
        setOpen,
        tech,
        setTech,
        user,
        setUser,
        openEdit,
        setOpenEdit,
        addTech,
        deleteTech,
        editingTech,
        techId,
        setTechId,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
