using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.UserPreference.DataAccess.Entity
{
    public partial class AssignmentContext : DbContext
    {
        public AssignmentContext(DbContextOptions<AssignmentContext> options) : base(options)
        {
        }

        public virtual DbSet<UserDetail> UserDetail { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserDetail>(entity =>
            {
                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(60);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(60);

                entity.Property(e => e.Color)
                    .IsRequired()
                    .HasMaxLength(60);

                entity.Property(e => e.Age)
                    .IsRequired();

            });
        }
    }
}
