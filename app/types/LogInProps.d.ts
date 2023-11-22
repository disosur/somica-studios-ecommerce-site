import { Session } from "next-auth";

export type LoginProps = {
  session: Session | null;
};
