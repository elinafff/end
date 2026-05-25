/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  UserProfile, PetListing, AdoptionApplication, ChatSession, 
  FeedbackPlan, AuditLog 
} from './types';

import { 
  INITIAL_USERS, INITIAL_PETS, INITIAL_APPLICATIONS, 
  INITIAL_CHATS, INITIAL_FEEDBACK_PLANS 
} from './data';

import AdminPortal from './components/AdminPortal';

export default function App() {
  // Database States (Simulating reactive memory)
  const [users, setUsers] = useState<UserProfile[]>(INITIAL_USERS);
  const [pets, setPets] = useState<PetListing[]>(INITIAL_PETS);
  const [applications, setApplications] = useState<AdoptionApplication[]>(INITIAL_APPLICATIONS);
  const [chats, setChats] = useState<ChatSession[]>(INITIAL_CHATS);
  const [feedbackPlans, setFeedbackPlans] = useState<FeedbackPlan[]>(INITIAL_FEEDBACK_PLANS);
  
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([
    {
      id: 'audit_init_1',
      timestamp: '2026-05-24 16:30:15',
      operator: '系统自检 (System)',
      action: '基础引擎就绪',
      module: '生命安全网关',
      targetId: 'sys_kernel',
      details: '流浪动物生老病死全周期治理系统：全双向合规链路已成功就绪，实时加载4组样本。',
      ip: '127.0.0.1'
    },
    {
      id: 'audit_init_2',
      timestamp: '2026-05-24 18:42:00',
      operator: '系统自检 (System)',
      action: '预加载数据源',
      module: '数据加载器',
      targetId: 'db_seed',
      details: '成功预拉取 4 组实名登记家庭、2 组进行中领养申请和 3 组领养后续回访记录。',
      ip: '127.0.0.1'
    }
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans" id="app-viewport">
      {/* Viewport limits aligned perfectly */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminPortal
          pets={pets}
          setPets={setPets}
          applications={applications}
          setApplications={setApplications}
          users={users}
          setUsers={setUsers}
          chats={chats}
          setChats={setChats}
          feedbackPlans={feedbackPlans}
          setFeedbackPlans={setFeedbackPlans}
          auditLogs={auditLogs}
          setAuditLogs={setAuditLogs}
          onClose={() => {}}
          jumpToPhoneScreen={() => {}}
        />
      </div>
    </div>
  );
}
