export type ResourceName =
  | "org"
  | "projects"
  | "billing"
  | "teamMembers"
  | "apiKeys"
  | "analytics"
  | "logs"
  | "users"
  | "prompts"
  | "datasets"
  | "checklists"
  | "evaluations"
  | "settings";

export type Role = "owner" | "admin" | "member" | "viewer" | "billing";
export type Action =
  | "create"
  | "read"
  | "update"
  | "delete"
  | "list"
  | "export"
  | "run";

export const roles: Record<
  Role,
  {
    value: Role;
    name: string;
    free?: boolean;
    description: string;
    permissions: Record<ResourceName, Partial<Record<Action, boolean>>>;
  }
> = {
  owner: {
    value: "owner",
    name: "Owner",
    description: "Owner of the organization",
    free: true,
    permissions: {
      org: {
        update: true,
      },
      projects: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      billing: {
        read: true,
        update: true,
      },
      teamMembers: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      apiKeys: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      analytics: { read: true },
      logs: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        export: true,
      },
      users: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        export: true,
      },
      prompts: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        run: true,
      },
      datasets: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      checklists: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      evaluations: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        run: true,
      },
      settings: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
    },
  },
  admin: {
    value: "admin",
    name: "Admin",
    free: true,
    description: "Admin-level access to the entire org",
    permissions: {
      projects: {
        create: true,
        read: true,
        update: true,
        delete: false,
        list: true,
      },
      billing: {
        update: true,
      },
      teamMembers: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      apiKeys: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      analytics: { read: true },
      logs: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        export: true,
      },
      users: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        export: true,
      },
      prompts: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        run: true,
      },
      datasets: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      checklists: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      evaluations: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        run: true,
      },
      settings: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
    },
  },
  member: {
    value: "member",
    name: "Member",
    free: true,
    description: "Full access to most resources",
    permissions: {
      projects: {
        create: true,
        read: true,
        update: true,
        delete: false,
        list: true,
      },
      teamMembers: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
      },
      apiKeys: {
        create: true,
        read: true,
        update: true,
        delete: false,
        list: true,
      },
      analytics: { read: true },
      logs: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        export: true,
      },
      users: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
        export: true,
      },
      prompts: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        run: true,
      },
      datasets: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      checklists: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
      evaluations: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        run: true,
      },
      settings: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
      },
    },
  },
  viewer: {
    value: "viewer",
    name: "Viewer",
    description: "View-only access to most resources",
    permissions: {
      projects: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
      },
      teamMembers: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
      },
      apiKeys: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
      },
      analytics: { read: true },
      logs: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
        export: false,
      },
      users: { read: true, list: true },
      prompts: {
        create: false,
        read: false,
        update: false,
        delete: false,
        list: false,
        run: false,
      },
      datasets: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
      },
      checklists: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
      },
      evaluations: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
        run: false,
      },
      settings: {
        read: true,
        list: true,
      },
    },
  },
  prompt_editor: {
    value: "prompt_editor",
    name: "Prompt Editor",
    description: "Access limited to prompt management",
    permissions: {
      prompts: {
        create: true,
        read: true,
        update: true,
        delete: true,
        list: true,
        run: true,
      },
      teamMembers: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
      },
      projects: {
        read: true,
        list: true,
      },
    },
  },
  billing: {
    value: "billing",
    name: "Billing",
    description: "Manage billing settings and invoices",
    permissions: {
      teamMembers: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
      },
      billing: {
        create: false,
        read: true,
        update: false,
        delete: false,
        list: true,
      },
    },
  },
  analytics: {
    value: "analytics",
    name: "Analytics Viewer",
    description: "Can only access the Analytics page",
    permissions: {
      analytics: { read: true },
      projects: {
        read: true,
        list: true,
      },
      users: {
        list: true,
      },
    },
  },
};

export function hasReadAccess(
  userRole: Role,
  resourceName: ResourceName,
): boolean {
  try {
    return roles[userRole].permissions[resourceName].read || false;
  } catch (error) {
    return false;
  }
}

export function hasAccess(
  userRole: Role,
  resourceName: ResourceName,
  action: keyof (typeof roles)[Role]["permissions"][ResourceName],
) {
  try {
    return roles[userRole].permissions[resourceName][action];
  } catch (error) {
    return false;
  }
}
