import {
  Bot,
  BrainCircuit,
  Database,
  FileText,
  MessageSquare,
  Search,
  Server,
  Sparkles,
  User,
} from "lucide-react";

export const EnterpriseChatbotWorkflow = () => {
  return (
    <div className="ai-workflow">
      <div className="ai-workflow-header">
        <div>
          <h4>Enterprise GenAI Chatbot</h4>
          <p>RAG-powered conversational AI workflow</p>
        </div>
        <Sparkles size={20} />
      </div>

      <div className="ai-workflow-flow">
        {/* User */}
        <div className="workflow-node">
          <div className="workflow-icon">
            <User size={18} />
          </div>
          <div>
            <strong>User</strong>
            <span>Query</span>
          </div>
        </div>

        <div className="workflow-arrow">↓</div>

        {/* API */}
        <div className="workflow-node">
          <div className="workflow-icon">
            <Server size={18} />
          </div>
          <div>
            <strong>Python / FastAPI</strong>
            <span>REST API</span>
          </div>
        </div>

        <div className="workflow-arrow">↓</div>

        {/* Chatbot */}
        <div className="workflow-node">
          <div className="workflow-icon">
            <MessageSquare size={18} />
          </div>
          <div>
            <strong>AI Chatbot</strong>
            <span>Query Processing</span>
          </div>
        </div>

        <div className="workflow-arrow">↓</div>

        {/* RAG */}
        <div className="workflow-node highlight">
          <div className="workflow-icon">
            <Search size={18} />
          </div>
          <div>
            <strong>RAG Pipeline</strong>
            <span>Context Retrieval</span>
          </div>
        </div>

        <div className="workflow-branch">
          <div className="workflow-branch-line" />

          <div className="workflow-node small">
            <div className="workflow-icon">
              <FileText size={16} />
            </div>
            <div>
              <strong>Enterprise Data</strong>
              <span>Documents / Knowledge</span>
            </div>
          </div>

          <div className="workflow-arrow">↓</div>

          <div className="workflow-node small">
            <div className="workflow-icon">
              <Database size={16} />
            </div>
            <div>
              <strong>Vector Database</strong>
              <span>Embeddings / Search</span>
            </div>
          </div>
        </div>

        <div className="workflow-arrow">↓</div>

        {/* LLM */}
        <div className="workflow-node highlight">
          <div className="workflow-icon">
            <BrainCircuit size={18} />
          </div>
          <div>
            <strong>LLM</strong>
            <span>Response Generation</span>
          </div>
        </div>

        <div className="workflow-arrow">↓</div>

        {/* Response */}
        <div className="workflow-node success">
          <div className="workflow-icon">
            <Bot size={18} />
          </div>
          <div>
            <strong>AI Response</strong>
            <span>Context-aware Answer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
