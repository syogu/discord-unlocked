webpackChunkdiscord_app.push([["wp_isdev_patch"], {}, r => cache=Object.values(r.c)]);
var UserStore = cache.find(m => m?.exports?.default?.getCurrentUser).exports.default;
var actions = Object.values(UserStore._dispatcher._actionHandlers._dependencyGraph.nodes);
var user = UserStore.getCurrentUser();
user.flags |= 1; // set the first bit of the user flags to 1 (USER_FLAG_DISCORD_EMPLOYEE)
user.premium_since = Date.now(); // set the user's premium status to active
user.bio = "I am a Discord employee"; // set the user's bio
user.email = "discordemployee@discord.com"; // set the user's email
user.verified = true; // set the user's email verification status to true
user.phone = "+1 (123) 456-7890"; // set the user's phone number
user.locale = "en-US"; // set the user's locale to English (United States)
user.theme = "dark"; // set the user's theme to dark mode
user.timezone_offset = -240; // set the user's timezone offset to Eastern Daylight Time (UTC-4)
user.status = "dnd"; // set the user's status to "Do Not Disturb"
user.nitro_gifting_since = Date.now(); // set the user's nitro gifting status to active
user.ui_features = {
  custom_theme: true, // enable custom theme feature
  advanced_search: true, // enable advanced search feature
  new_chat_box_ui: true, // enable new chat box UI feature
  voice_commands: true, // enable voice commands feature
  faster_load_times: true, // enable faster load times feature
  message_schedule: true, // enable message scheduling feature
  video_chat_premium: true, // enable video chat premium feature
};
var experimentStoreActionHandler = actions.find(n => n.name === "ExperimentStore")?.actionHandler;
if (experimentStoreActionHandler) {
  experimentStoreActionHandler.CONNECTION_OPEN({
    type: "CONNECTION_OPEN",
    user: {
      flags: user.flags,
      premium_since: user.premium_since,
      bio: user.bio,
      email: user.email,
      verified: user.verified,
      phone: user.phone,
      locale: user.locale,
      theme: user.theme,
      timezone_offset: user.timezone_offset,
      status: user.status,
      nitro_gifting_since: user.nitro_gifting_since,
      ui_features: user.ui_features,
    },
    experiments: [],
  });
}
var developerExperimentStoreActionHandler = actions.find(n => n.name === "DeveloperExperimentStore")?.actionHandler;
if (developerExperimentStoreActionHandler) {
  developerExperimentStoreActionHandler.CONNECTION_OPEN();
}
actions.find(n => n.name === "UserAchievementsStore")?.actionHandler.ACHIEVEMENT_UPDATE({
achievements: [
{id: "DISCORD_EMPLOYEE", completed_at: Date.now()},
{id: "EARLY_SUPPORTER", completed_at: Date.now()},
{id: "HOUSE_BRAVERY", completed_at: Date.now()},
{id: "VERIFIED_DEVELOPER", completed_at: Date.now()},
{id: "NITRO_GIFTING", completed_at: Date.now()},
{id: "VERIFIED_BOT_DEVELOPER", completed_at: Date.now()},
{id: "PARTNERED_SERVER_OWNER", completed_at: Date.now()},
{id: "DISCORD_PARTNER", completed_at: Date.now()},
{id: "HYPESQUAD_ONLINE", completed_at: Date.now()},
{id: "HYPESQUAD_BALANCE", completed_at: Date.now()},
{id: "HYPESQUAD_BRILLIANCE", completed_at: Date.now()},
{id: "BUG_HUNTER_LEVEL_1", completed_at: Date.now()},
{id: "BUG_HUNTER_LEVEL_2", completed_at: Date.now()},
{id: "EARLY_VERIFIED_BOT_DEVELOPER", completed_at: Date.now()},
{id: "VERIFIED_DEVELOPER_BOT", completed_at: Date.now()},
{id: "HOUSE_BRILLIANCE", completed_at: Date.now()},
{id: "HOUSE_BALANCE", completed_at: Date.now()},
{id: "EARLY_VERIFIED_DEVELOPER", completed_at: Date.now()},
{id: "DISCORD_CERTIFIED_MODERATOR", completed_at: Date.now()},
{id: "DISCORD_PARTNERED_SERVER_MODERATOR", completed_at: Date.now()},
{id: "DISCORD_EMPLOYEE_RETIREMENT", completed_at: Date.now()},
{id: "DISCORD_COUNCIL", completed_at: Date.now()},
{id: "DISCORD_INTERN", completed_at: Date.now()},
{id: "DISCORD_COMMUNITY_HERO", completed_at: Date.now()},
{id: "DISCORD_BUG_BOUNTY", completed_at: Date.now()},
{id: "DISCORD_BUG_HUNTER", completed_at: Date.now()},
{id: "DISCORD_EVENT_WINNER", completed_at: Date.now()},
{id: "DISCORD_FOR_GOOD", completed_at: Date.now()},
{id: "DISCORD_PARTNER_MANAGER", completed_at: Date.now()},
{id: "DISCORD_TRUSTED_MODERATOR", completed_at: Date.now()},
{id: "DISCORD_HYPE_SQUAD_EVENTS", completed_at: Date.now()},
{id: "DISCORD_HYPE_SQUAD_BRILLIANCE", completed_at: Date.now()},
{id: "DISCORD_HYPE_SQUAD_BALANCE", completed_at: Date.now()},
{id: "DISCORD_HYPE_SQUAD_BRAVERY", completed_at: Date.now()},
{id: "DISCORD_HYPE_SQUAD", completed_at: Date.now()},
{id: "DISCORD_PREMIUM_EARLY_ACCESS", completed_at: Date.now()},
{id: "DISCORD_PREMIUM", completed_at: Date.now()},
{id: "DISCORD_NITRO_CLASSIC", completed_at: Date.now()},
{id: "DISCORD_NITRO", completed_at: Date.now()},
{id: "DISCORD_NITRO_BOOSTER", completed_at: Date.now()},
{id: "DISCORD_GLOBAL_MODERATOR", completed_at: Date.now()},
{id: "DISCORD_STAFF", completed_at: Date.now(),},
{id: "DISCORD_GAME_STORE", completed_at: Date.now(),},
{id: "DISCORD_GAME_LAUNCHER", completed_at: Date.now(),},
{id: "DISCORD_NITRO_BOOST", completed_at: Date.now(),},
{id: "DISCORD_HYPESQUAD_EVENTS", completed_at: Date.now(),},
{id: "DISCORD_BOT_LISTING", completed_at: Date.now(),},
{id: "DISCORD_BOT_VOTER", completed_at: Date.now(),},
{id: "DISCORD_BOT_OWNER", completed_at: Date.now(),},
{id: "DISCORD_BOT_DEVELOPER", completed_at: Date.now(),},
{id: "DISCORD_SERVER_CREATOR", completed_at: Date.now(),},
{id: "DISCORD_SERVER_OWNER", completed_at: Date.now(),},
{id: "DISCORD_SERVER_MODERATOR", completed_at: Date.now(),},
{id: "DISCORD_SERVER_MEMBER", completed_at: Date.now(),},
{id: "DISCORD_SERVER_BOOSTER", completed_at: Date.now(),},
{id: "DISCORD_EMOJI_CREATOR", completed_at: Date.now(),},
{id: "DISCORD_VOICE_CHAT_USER", completed_at: Date.now(),},
{id: "DISCORD_SCREEN_SHARE_USER", completed_at: Date.now(),},
{id: "DISCORD_STREAMER_MODE_USER", completed_at: Date.now(),}
]
});
webpackChunkdiscord_app.pop();

"we ballin"