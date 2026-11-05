import { AgenticFullChat } from "@trimble-agentic-external-npm-local/agentic-chat-react";
import { getAccessToken } from "./auth";

const agentId = import.meta.env.VITE_AGENT_ID as string | undefined;

export default function App() {
  if (!agentId) {
    return (
      <p style={{ padding: 24, fontFamily: "sans-serif" }}>
        Missing <code>VITE_AGENT_ID</code>. Copy <code>.env.example</code> to <code>.env.local</code> and set it
        to the UUID of your agent from Agent Studio.
      </p>
    );
  }

  const provideToken = async (): Promise<string> => getAccessToken();

  return (
    <div style={{ height: "100vh" }}>
      <AgenticFullChat
        provideToken={provideToken}
        environment="prod"
        theme="light"
        agentId={agentId}
        chatInputConfiguration={{ buttons: [], hideModelSelection: false }}
      />
    </div>
  );
}
