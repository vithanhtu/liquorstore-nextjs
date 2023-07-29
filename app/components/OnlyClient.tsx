"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccount } from "../redux/features/auth-slice";

interface ClientOnlyProps {
  children: React.ReactNode;
  currentUser?: any;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children, currentUser }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const dispatch = useDispatch();
  if (currentUser) {
    dispatch(getAccount(currentUser));
  }

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
