public class main extends PluginBase implements Listener {

    @Override
    public void onEnable() {
        this.getServer().getPluginManager().registerEvents(this, this);
        this.getLogger().info("Your Studio has been Enabled. Click Here.");
    }

    @Override
    public void onDisable(){
        this.getLogger().info("Studio Mode Disabled");
    }
        return true;
    }
}
