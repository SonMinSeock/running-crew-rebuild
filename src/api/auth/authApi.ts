import { supabase } from "../../lib/supabase";

type SignupParams = {
  email: string;
  password: string;
  name: string;
};

export const signup = async ({ email, password, name }: SignupParams) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  const user = data.user;

  if (!user) {
    throw new Error("유저 생성 실패");
  }

  const { error: profileError } = await supabase.from("profiles").insert({
    id: user.id,
    email,
    name,
  });

  if (profileError) {
    throw profileError;
  }

  return data;
};

type LoginParams = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginParams) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
};

export const loginWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",

    options: {
      redirectTo: window.location.origin,
    },
  });

  if (error) {
    throw error;
  }

  return data;
};
