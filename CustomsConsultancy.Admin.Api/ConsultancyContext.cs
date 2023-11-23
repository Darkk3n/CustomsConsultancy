using CustomsConsultancy.Admin.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomsConsultancy.Admin.Api
{
    public class ConsultancyContext : DbContext
    {
        public ConsultancyContext(DbContextOptions options)
        : base(options)
        {

        }

        public DbSet<PotentialClient> PotentialClients { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Course> Course { get; set; }
        public DbSet<Inquiry> Inquiry { get; set; }
        public DbSet<CourseClients> CourseClients { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PotentialClient>()
            .Property(r => r.Name)
            .IsRequired()
            .HasMaxLength(100);

            modelBuilder.Entity<PotentialClient>()
            .Property(r => r.Email)
            .IsRequired()
            .HasMaxLength(50);

            modelBuilder.Entity<PotentialClient>()
           .Property(r => r.Phone)
           .HasMaxLength(50);

            modelBuilder.Entity<Course>()
            .Property(r => r.Title)
            .IsRequired()
            .HasMaxLength(100);

            modelBuilder.Entity<Course>()
            .Property(r => r.Price)
            .IsRequired()
            .HasPrecision(18, 2);

            modelBuilder.Entity<Course>()
            .Property(r => r.Duration)
            .IsRequired()
            .HasMaxLength(50);

            modelBuilder.Entity<Course>()
            .Property(r => r.FileName)
            .HasMaxLength(200);

            modelBuilder.Entity<Course>()
            .Property(r => r.Status)
            .HasMaxLength(20);

            modelBuilder.Entity<Client>()
            .Property(r => r.Name)
            .IsRequired()
            .HasMaxLength(100);

            modelBuilder.Entity<Client>()
            .Property(r => r.Email)
            .IsRequired()
            .HasMaxLength(50);

            modelBuilder.Entity<Client>()
           .Property(r => r.Phone)
           .HasMaxLength(50);

            modelBuilder.Entity<Inquiry>()
            .Property(r => r.ClientName)
            .IsRequired()
            .HasMaxLength(100);

            modelBuilder.Entity<Inquiry>()
            .Property(r => r.ClientLastName)
            .IsRequired()
            .HasMaxLength(100);

            modelBuilder.Entity<Inquiry>()
           .Property(r => r.Company)
           .IsRequired()
           .HasMaxLength(100);

            modelBuilder.Entity<Inquiry>()
             .Property(r => r.Email)
             .IsRequired()
             .HasMaxLength(50);

            modelBuilder.Entity<Inquiry>()
           .Property(r => r.Phone)
           .HasMaxLength(50);

            modelBuilder.Entity<Inquiry>()
            .Property(r => r.MobilePhone)
            .HasMaxLength(50);

            modelBuilder.Entity<Inquiry>()
             .Property(p => p.Answered)
             .HasDefaultValue(false);

            modelBuilder.Entity<Course>()
            .HasMany(r => r.Clients)
            .WithMany(r => r.Courses)
            .UsingEntity<CourseClients>();
        }
    }
}